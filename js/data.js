var skills = [
  {
    title: "BASIC",
    img: "img/img-planet-basics.png",
    skill: [
      {
        name: "BASIC SKILLS",
        icon: "category",
        selected: false,
        all_done: true,
        recommened : [
          {
            rc_skill:'Learn HTML',
            selected: true,
          },
          {
            rc_skill:'Basics of CSS',
            selected: false,
          },
          {
            rc_skill:'Basics of JavaScript',
            selected: false,
          }
        ], 
        optional: []
      },
      {
        name: "BASIC TOOLS",
        icon: "build",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Git - Version Control',
            selected: false,
          },
          {
            rc_skill:'Basic Terminal Usage',
            selected: false,
          },
          {
            rc_skill:'Text Editor',
            selected: false,
          },
          {
            rc_skill:'A Heart of Reserching',
            selected: false,
          }
        ],
        optional: []
      }
    ]
  },
  {
    title: "CSS",
    img: "img/img-planet-css.png",
    skill: [
      {
        name: "CSS FRAMEWORK",
        icon: "flip_to_front",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Bootstrap',
            selected: false,
          }
        ],
        optional : [
          {
            op_skill:'UIKit',
            selected: false,
          },
          {
            op_skill:'Foundation',
            selected: false,
          },
          {
            op_skill:'Semantic UI',
            selected: false,
          }
        ]
      },
      {
        name: "CSS PREPROCESSORS",
        icon: "view_quilt",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Sass',
            selected: false,
          },
          {
            rc_skill:'PostCSS',
            selected: false,
          },
        ],
        optional : [
          {
            op_skill:'Less',
            selected: false,
          },
          {
            op_skill:'Stylus',
            selected: false,
          }
        ]
      },
      {
        name: "CSS ARCHITECHTURE",
        icon: "developer_board",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'OOCSS',
            selected: false,
          }
        ],
        optional : [
          {
            op_skill:'SMACSS',
            selected: false,
          },
          {
            op_skill:'BEM',
            selected: false,
          }
        ]
      },
      {
        name: "CSS SKILLS",
        icon: "devices",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Responsive Web',
            selected: false,
          },
          {
            rc_skill:'Flexbox',
            selected: false,
          }
        ],
        optional: []
      },
      {
        name: "CSS MASTERY",
        icon: "widgets",
        selected: false,
        all_done: false,
        recommened: [],
        optional : [
          {
            op_skill:'Grid Layout',
            selected: false,
          },
          {
            op_skill:'Animation',
            selected: false,
          },
          {
            op_skill:'Transform 2D, 3D',
            selected: false,
          }
        ]
      }
    ]
  },
  {
    title: "JAVASCRIPT",
    img: "img/img-planet-js.png",
    skill: [
      {
        name: "BASIC DOM",
        icon: "hdr_strong",
        selected: false,
        all_done: false,
        recommened: [],
        optional : [
          {
            op_skill:'jQuery',
            selected: false,
          }
        ]
      },
      {
        name: "WEB DRAWING",
        icon: "gradient",
        selected: false,
        all_done: false,
        recommened: [],
        optional : [
          {
            op_skill:'SVG',
            selected: false,
          },
          {
            op_skill:'Canvas',
            selected: false,
          },
          {
            op_skill:'D3.js',
            selected: false,
          }
        ]
      },
      {
        name: "JAVASCRIPT SKILLS",
        icon: "format_quote",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'ES6',
            selected: false,
          }
        ],
        optional: []
      },
      {
        name: "JAVASCRIPT FRAMEWORK",
        icon: "developer_mode",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Vus.js',
            selected: false,
          },
          {
            rc_skill:'Angular',
            selected: false,
          },
          {
            rc_skill:'React.js',
            selected: false,
          }
        ],
        optional: []
      },
      {
        name: "JAVASCRIPT PREPROCESSORS",
        icon: "nfc",
        selected: false,
        all_done: false,
        recommened: [],
        optional : [
          {
            op_skill:'TypeScript',
            selected: false,
          },
          {
            op_skill:'Babel',
            selected: false,
          },
          {
            op_skill:'CoffeeScript',
            selected: false,
          }
        ]
      }
    ]
  },
  {
    title: "MANAGERS",
    img: "img/img-planet-managers.png",
    skill: [
      {
        name: "PACKAGE MANAGERS",
        icon: "device_hub",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'NPM',
            selected: false,
          },
          {
            rc_skill:'YARN',
            selected: false,
          }
        ],
        optional : [
          {
            op_skill:'Bower',
            selected: false,
          }
        ]
      },
      {
        name: "TASK RUNNERS",
        icon: "import_contacts",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'npm scripts',
            selected: false,
          },
          {
            rc_skill:'gulp',
            selected: false,
          }
        ],
        optional : [
          {
            op_skill:'grunt',
            selected: false,
          }
        ]
      },
      {
        name: "BUILD TOOLS",
        icon: "table_chart",
        selected: false,
        all_done: false,
        recommened : [
          {
            rc_skill:'Webpack',
            selected: false,
          }
        ],
        optional : [
          {
            op_skill:'Parcel',
            selected: false,
          }
        ]
      }
    ]
  }
];

var app = new Vue({
  el: "#app",
  data: {
    skills: skills,
    now_level: 0,
    rank: ["前端工程小幼獅", "前端工程少年獅", "前端攻城獅"],
    now_selected: 'BASIC SKILLS',
  },
  methods: {
    focus: function(skill) {
      var vm = this
      skills.forEach(function(item) {
        item.skill.forEach(function(item){
          item.selected = false
        })
      });
      skill.selected = !skill.selected;
      vm.now_selected = skill.name
    },
    select: function(item){
      item.selected = !item.selected
    },
    learn: function(skill){
      var learn_num = {
        recommened_length:  skill.recommened.filter(rc=>rc.selected===true).length,
        optional_length: skill.optional.filter(rc=>rc.selected===true).length
      }
      return learn_num
    }
  },
  computed:{
    filters: function(){
      var vm = this
      var now_data
      vm.skills.forEach(x => {
        if(!now_data){
          now_data = x.skill.find(y => y.name === vm.now_selected);
        }
      });
      return now_data
    }
  }
});
