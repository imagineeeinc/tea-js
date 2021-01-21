var cream = Tea.require("Creamy")
var salt = Tea.require("Salt")
var ink = Tea.require("Ink")

new cream(
    [
        {
            ele: "div",
            id: "my-block",
            class: ["btn", "bg-green"],
            attributes: [
                {
                    att: "data-action",
                    value: "blast"
                }
            ],
            child: [
                "{{mes}} ",
                {
                    ele: "span",
                    css: `
                    color: brown;
                    `,
                    child: [
                        " from {{lib}}"
                    ]
                }
            ]
        }
    ]//, {insert_location: "header"}
)
var m = "tea"
new ink(
    {
        el: '#my-block',
        data: [
            {
                name: "mes",
                value: "Hello, World!"
            },
            {
                name: "lib",
                value: m
            }
        ]
    }
)
conlog(Tea.require("Version"))