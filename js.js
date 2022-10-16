"use strict";

import {
  animate,
  scroll,
  stagger,
  inView,
} from "https://cdn.skypack.dev/motion";
scroll(animate(".progress", { scaleX: [0, 1] }));
animate("body", { opacity: [0, 1] }, { duration: 1.5 });
