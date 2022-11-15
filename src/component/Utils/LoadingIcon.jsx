const LoadingIcon = (loading) => {
  return (
    <>
      {" "}
      {loading ? (
        <svg
          className="h-7 w-7 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.671692 22.8699C0.288391 22.4866 0.253545 21.8868 0.567156 21.4642L0.671692 21.3431L9.98455 12.0297L0.671692 2.71638C0.288391 2.33308 0.253545 1.73328 0.567156 1.31061L0.671692 1.18952C1.05499 0.806219 1.6548 0.771373 2.07746 1.08498L2.19855 1.18952L12.2753 11.2663C12.6586 11.6496 12.6935 12.2494 12.3799 12.6721L12.2753 12.7932L2.19855 22.8699C1.77692 23.2916 1.09332 23.2916 0.671692 22.8699Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};
export default LoadingIcon;
