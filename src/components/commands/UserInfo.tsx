import React, { useEffect, useState } from "react";
import { UserWrapper, HighlightSpan, HighlightAlt } from "../styles/global.styles";

const UserInfo: React.FC = () => {
    const [ipAddress, setIpAddress] = useState("loading...");
    const [location, setLocation] = useState("loading...");
    const [timeZone, setTimeZone] = useState("loading...");
    const [currentTime, setCurrentTime] = useState("loading...");
    const [wifiNetwork, setWifiNetwork] = useState("N/A");

    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await fetch("https://api64.ipify.org?format=json");
                const data = await response.json();
                setIpAddress(data.ip);

                // Fetch location, timezone, and current time using IP address
                const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
                const locationData = await locationResponse.json();
                setLocation(`${locationData.city}, ${locationData.region}, ${locationData.country}`);
                setTimeZone(locationData.timezone);

                // Fetch current time using timezone
                const currentTimeResponse = await fetch(`https://worldtimeapi.org/api/timezone/${locationData.timezone}`);
                const currentTimeData = await currentTimeResponse.json();
                setCurrentTime(currentTimeData.datetime);
            } catch (error) {
                console.error("Error fetching user info:", error);
                setIpAddress("Error fetching IP");
                setLocation("Error fetching location");
                setTimeZone("Error fetching timezone");
                setCurrentTime("Error fetching time");
            }
        };

        fetchIpAddress();
    }, []);

    const getBrowserInfo = () => {
        const userAgent = navigator.userAgent;
        const browserName = navigator.appName;
        const fullVersion = '' + parseFloat(navigator.appVersion);
        const majorVersion = parseInt(navigator.appVersion, 10);
        return `${browserName} ${fullVersion} (Major: ${majorVersion})`;
    };

    const getOSInfo = () => {
        const userAgent = window.navigator.userAgent;
        let os = "Unknown OS";
        if (userAgent.indexOf("Win") !== -1) os = "Windows";
        if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
        if (userAgent.indexOf("X11") !== -1) os = "UNIX";
        if (userAgent.indexOf("Linux") !== -1) os = "Linux";
        return os;
    };

    return (
        <UserWrapper data-testid="user-info">
            <p>
                IP address: <HighlightSpan>{ipAddress}</HighlightSpan>.
            </p>
            <p>
                Location: <HighlightAlt>{location}</HighlightAlt>.
            </p>
            <p>
                Timezone: <HighlightAlt>{timeZone}</HighlightAlt>.
            </p>
            <p>
                Current Time: <HighlightSpan>{currentTime}</HighlightSpan>.
            </p>
            <p>
                Wifi Network<HighlightAlt>{wifiNetwork}</HighlightAlt>.
            </p>
            <p>
                Browser:<HighlightSpan>{getBrowserInfo()}</HighlightSpan>.
            </p>
            <p>
                OS: <HighlightAlt>{getOSInfo()}</HighlightAlt>.
            </p>
        </UserWrapper>
    );
};

export default UserInfo;
