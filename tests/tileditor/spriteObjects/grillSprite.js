export default {
    name: "grill-student",
    properties: {},
    states: {
        idle: {
            location: "/" + require("../assets/grill_walking.png"), //location of sprites
            rps: 5, //refresh per second
            loop: true, //will continue to loop
            frames: [
                {
                    x: 3,
                    y: 3,
                    width: 32,
                    height: 32,
                },
                {
                    x: 32,
                    y: 1,
                    width: 32,
                    height: 32,
                },
                {
                    x: 0,
                    y: 32,
                    width: 32,
                    height: 32,
                },
                {
                    x: 32,
                    y: 30,
                    width: 32,
                    height: 32,
                },
            ],
        },
    },
}
