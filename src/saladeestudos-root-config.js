import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/landing",
  app: () =>
    System.import("@saladeestudos/landing"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@saladeestudos/navbar",
//   app: () => System.import("@saladeestudos/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
