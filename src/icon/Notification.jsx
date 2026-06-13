import React from "react";

const Notification = ({
  color = "#000000",
  width = 22,
  height = 22,
  count = 0,
}) => {
  return (
    <div className="relative inline-block">
       <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    id="Bell-Notification--Streamline-Sharp-Remix"
    width={width}
    height={height}
  >
    <desc>
      {"\n    Bell Notification Streamline Icon: https://streamlinehq.com\n  "}
    </desc>
    <g id="bell-notification--alert-bell-ring-notification-alarm">
      <path
        id="Union"
        fill={color}
        fillRule="evenodd"
        d="M6.25015 9c0 -3.17564 2.57436 -5.75 5.75005 -5.75 3.1756 0 5.75 2.57436 5.75 5.75v5.3313l0.164 0.2878L19.129 16.75H4.87146l1.21466 -2.131 0.16403 -0.2878V9ZM12.0002 0.75C7.4438 0.75 3.75015 4.44365 3.75015 9v4.6688L1.63418 17.381 0.568848 19.25H23.4319l-1.0655 -1.8691 -2.1162 -3.7122V9c0 -4.55635 -3.6937 -8.25 -8.25 -8.25Zm-2.00026 22.5h3.99996v-2.5H9.99994v2.5Z"
        clipRule="evenodd"
        strokeWidth={1}
      />
    </g>
  </svg>

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default Notification;
