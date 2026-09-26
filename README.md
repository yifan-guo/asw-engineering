# Heat Tile Line — genealogy simulator

Self-contained operator console for the locked lot-allocation model. Open `heat-tile-line-simulator.html` in a browser. No network, no build.

Genealogy is the 8 kg slice of the tower map at cast: every parent lot and its kilograms.

D1: well-mixed instantly. `qty_X leaving = (kg_X / kg_vessel) × kg_leaving`.

The ledger is append-only events (add, set_flow, stop_flow, observed_stop, empty, capacity_reached, cast, scan_attach, alert). Flow samples update the vessel map only — they do not write a ledger row.

Tanks are 400 kg, towers are 80 kg, density is 1.15 kg/L, cast is 8 kg. TANK-A has an outlet meter and TOWER-1 has an inlet meter. TANK-B and TOWER-2 use level.
