import { iWelcomeModalProps } from "./interfaces";

export function WelcomeModal(props: iWelcomeModalProps) {
  function onClose(): void {
    props.onClose();
  }

  return (
    <div onClick={onClose} className="fixed left-0 top-0 w-screen px-8 h-screen flex bg-slate-400/40">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-2xl rounded-xl h-fit m-auto max-w-lg p-3 overflow-auto"
      >
        {/* TODO Fix header to the top */}

        <div className="top-0 justify-between sticky bg-white">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-2xl pr-6">Welcome to CHI Bike Tracker</h2>
              {/* TODO Add the time */}
            </div>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-m px-4 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 right-0"
              onClick={onClose}
            >
              X
            </button>
          </div>
          {/* TODO Add street address photo? Google Maps Place Photos */}
        </div>
        <p className="text-center">
          Despite the fact that Chicago is one of the highest ranked cities for bicycle commuting every year, cyclists
          are frequently injured by reckless drivers or poorly designed and maintained roads. This website's goal is to
          shine light on the regularity and severity of this issue by mapping/detailing the accidents that largely go
          unreported. <br />
          <br />
          To get started, simply close this window and click on any of the map markers to view detailed crash
          information. For more information, visit the menu icon on the top left of the page. <br />
          <br />
          Thank you for visiting and be sure to check back for future updates!
        </p>
      </div>
    </div>
  );
}
