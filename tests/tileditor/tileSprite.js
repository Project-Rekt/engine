export default {
    properties: {},
    states: {
        idle: {
            location:
                "/" + require("../spriteActor/assets/Code-Monkey.png").default, //location of sprites
            rps: 5, //refresh per second
            loop: true, //will continue to loop
            frames: [
                {
                    x: 3,
                    y: 3,
                    width: 48,
                    height: 85,
                },
                {
                    x: 55,
                    y: 3,
                    width: 46,
                    height: 86,
                },
                {
                    x: 103,
                    y: 0,
                    width: 45,
                    height: 91,
                },
            ],
        },
        // fight: {
        //     location: "/" + require("./assets/goku_fight.png").default, //location of sprites
        //     rps: 10, //refresh per second
        //     frames: [
        //         {
        //             x: 0,
        //             y: 9,
        //             width: 59,
        //             height: 78,
        //         },
        //         {
        //             x: 69,
        //             y: 10,
        //             width: 87,
        //             height: 77,
        //         },
        //         {
        //             x: 164,
        //             y: 0,
        //             width: 51,
        //             height: 88,
        //         },
        //         {
        //             x: 226,
        //             y: 1,
        //             width: 80,
        //             height: 89,
        //         },
        //     ],
        // },
    },
}
