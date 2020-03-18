export default {
    name: {},
    properties: {},
    states: {
        idle: {
            location: "/" + require("../../tileditor/assets/car.png"), //location of sprites
            rps: 5, //refresh per second
            loop: true, //will continue to loop
            frames: [
                {
                    x: 0,
                    y: 0,
                    width: 64,
                    height: 64,
                },
                {
                    x: 0,
                    y: 0,
                    width: 64,
                    height: 64,
                },
                {
                    x: 0,
                    y: 0,
                    width: 64,
                    height: 64,
                },
                {
                    x: 0,
                    y: 0,
                    width: 64,
                    height: 64,
                },
            ],
        },
    },
}
