type Wl = { win: number; lose: number };
type Tnmt = { entry: number; top1: number; top4: number };

export type Result = {
  matches: { official: Wl; unofficial: Wl; total: Wl; };
  tournaments: { official: Tnmt; unofficial: Tnmt; total: Tnmt; };
};
