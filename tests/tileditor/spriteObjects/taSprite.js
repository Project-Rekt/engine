export default {
    name: "ta-turret",
    properties: {},
    states: {
        idle: {
            location: "/" + require("../../tileditor/assets/ta.png"), //location of sprites
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
                    x: 65,
                    y: 0,
                    width: 64,
                    height: 64,
                },
                {
                    x: 0,
                    y: 64,
                    width: 64,
                    height: 64,
                },
                {
                    x: 64,
                    y: 64,
                    width: 64,
                    height: 64,
                },
            ],
        },
    },
}
