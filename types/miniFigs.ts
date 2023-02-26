export interface MiniFigure {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string | null;
  set_url: string;
  last_modified_dt: string;
}

export interface MiniFiguresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: MiniFigure[];
}

export interface Part {
  color: {
    id: number;
    is_trans: boolean;
    name: string;
    rgb: string;
    // don't need this, don't bother to type it as it's complex and not needed
    external_ids: any;
  };
  element_id: string;
  id: number;
  inv_part_id: number;
  is_spare: boolean;
  num_sets: number;
  part: {
    part_num: string;
    name: string;
    part_cat_id: number;
    part_url: string;
    part_img_url: string | null;
    external_ids: {
      BrickLink: Number[];
      BrickOwl: Number[];
      Brickset: Number[];
      LDraw: Number[];
      LEGO: Number[];
    };
  };
  quantity: number;
  set_num: string;
}

export interface PartsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Part[];
}
