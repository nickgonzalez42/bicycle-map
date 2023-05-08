import { iMyModalProps } from "./interfaces";

export function MyModal(props: iMyModalProps) {
  function onClose(): void {
    props.onClose();
  }

  return (
    <div className="fixed left-0 top-0 w-screen px-8 h-screen flex bg-slate-400/40">
      <div className="bg-white rounded-md h-4/5 m-auto p-5">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl">
              {props.crash.street_no} {props.crash.street_direction} {props.crash.street_name}
            </h2>
            {/* TODO Add the time */}
            <p className="text-gray-500">
              {props.crash.crash_date.substring(5, 7)}/{props.crash.crash_date.substring(8, 10)}/
              {props.crash.crash_date.substring(0, 4)}
            </p>
          </div>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-m px-4 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 right-0"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h4 className="font-bold underline">Crash Info</h4>
        <ul className="list-disc">
          <li>Crash Type: {props.crash.crash_type}</li>
          <li>Initial Crash Type: {props.crash.first_crash_type}</li>
          <li>Primary Cause: {props.crash.prim_contributory_cause}</li>
          <li>Secondary Cause: {props.crash.sec_contributory_cause}</li>
          <li>Driver Action: {props.crash.driver_action}</li>
          <li>Bicyclist Action: {props.crash.pedpedal_action}</li>
          <li>Bicyclist Location: {props.crash.pedpedal_location}</li>
          <li>Ejection: {props.crash.ejection}</li>
          <li>Damage: {props.crash.damage}</li>
        </ul>
        <h4 className="font-bold underline">Location Information</h4>
        <ul className="list-disc">
          <li>Trafficway Type: {props.crash.trafficway_type}</li>
          <li>Traffic Signal: {props.crash.traffic_control_device}</li>
          <li>Traffic Signal Condition: {props.crash.device_condition}</li>
          <li>Street alignment: {props.crash.alignment}</li>
          <li>Road Defect: {props.crash.road_defect}</li>
        </ul>
        <h4 className="font-bold underline">Injuries & Fatalities</h4>
        <ul className="list-disc">
          <li>Fatalities: {props.crash.injuries_fatal}</li>
          <li>Injuries Reported, Not Evident: {props.crash.injuries_no_indication}</li>
          <li>Injuries, Non-Incapacitating: {props.crash.injuries_non_incapacitating}</li>
          <li>Injuries: {props.crash.injuries_reported_not_evident}</li>
          <li>Injury Classification: {props.crash.injury_classification}</li>
          <li>Total Injuries: {props.crash.injuries_total}</li>
          <li>Most Severe Injuries: {props.crash.most_severe_injury}</li>
        </ul>
        <h4 className="font-bold underline">Conditions</h4>
        <ul className="list-disc">
          <li>Lighting Condition: {props.crash.lighting_condition}</li>
          <li>Driver Vision: {props.crash.driver_vision}</li>
          <li>Cyclist Vision: {props.crash.pedpedal_visibility}</li>
          <li>Weather Condition: {props.crash.weather_condition}</li>
          <li>Roadway Surface Condition: {props.crash.roadway_surface_cond}</li>
        </ul>
        <h4 className="font-bold underline">Miscellaneous</h4>
        <ul className="list-disc">
          <li>Safety Equipment Used: {props.crash.safety_equipment}</li>
          <li>Physical Condition: {props.crash.physical_condition}</li>
        </ul>
      </div>
    </div>
  );
}
