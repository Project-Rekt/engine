export default {
    name: "pylon-obstacle",
    properties: {},
    states: {
        idle: {
            location: "/" + require("../../tileditor/assets/Pylon.png"), //location of sprites
            rps: 5, //refresh per second
            loop: true, //will continue to loop
            frames: [
                {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32,
                },
                {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32,
                },
                {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32,
                },
                {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32,
                },
            ],
        },
    },
}
