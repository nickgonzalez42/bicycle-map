export interface ICrash {
  traffic_control_device: string;
  device_condition: string;
  weather_condition: string;
  lighting_condition: string;
  first_crash_type: string;
  trafficway_type: string;
  alignment: string;
  roadway_surface_cond: string;
  road_defect: string;
  crash_type: string;
  intersection_related_i: string;
  damage: string;
  prim_contributory_cause: string;
  sec_contributory_cause: string;
  street_no: string;
  street_direction: string;
  street_name: string;
  most_severe_injury: string;
  injuries_total: string;
  injuries_fatal: string;
  injuries_non_incapacitating: string;
  injuries_reported_not_evident: string;
  injuries_no_indication: string;
  latitude: string;
  longitude: string;
  crash_record_id: string;
  crash_date: string;
  person_id: string;
  safety_equipment: string;
  ejection: string;
  injury_classification: string;
  driver_action: string;
  driver_vision: string;
  physical_condition: string;
  pedpedal_action: string;
  pedpedal_visibility: string;
  pedpedal_location: string;
  bac_result: string;
}

export interface iWelcomeModalProps {
  onClose(arg: void): void;
}

export interface iMyModalProps extends iWelcomeModalProps {
  crash: ICrash;
}
