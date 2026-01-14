function themeSection(){
    let rootElement = document.documentElement; //documentElement humko humara poora html ka structure dedeta hai.
// console.log(rootElement);

let themes = [
    {
        '--pri': '#F8F4E1',
        '--sec': '#381c0a',
        '--tri1': '#eea700',
        '--tri2': '#74512D',
    },
    {
        '--pri': '#F6F0D7',
        '--sec': '#89986D',
        '--tri1': '#C5D89D',
        '--tri2': '#9CAB84',
    },
    {
        '--pri': '#FFEF5F',
        '--sec': '#4D2B8C',
        '--tri1': '#EEA727',
        '--tri2': '#85409D',
    },
    {
        '--pri': '#ffd3e2ff',
        '--sec': '#132440',
        '--tri1': '#3B9797',
        '--tri2': '#16476A',
    },
    {
        '--pri': '#EEEEEE',
        '--sec': '#213C51',
        '--tri1': '#DDAED3',
        '--tri2': '#6594B1',
    },
    {
        '--pri': '#D3DAD9',
        '--sec': '#201f25ff',
        '--tri1': '#715A5A',
        '--tri2': '#44444E',
    },
    {
        '--pri': '#FFCC00',
        '--sec': '#090040',
        '--tri1': '#B13BFF',
        '--tri2': '#471396',
    },
    {
        '--pri': '#fff7d3ff',
        '--sec': '#05593cff',
        '--tri1': '#ffbf00ff',
        '--tri2': '#5faa5dff',
    },
    {
        '--pri': '#E2E2B6',
        '--sec': '#021526',
        '--tri1': '#6EACDA',
        '--tri2': '#03346E',
    },
    {
        '--pri': '#EEE4B1',
        '--sec': '#330748ff',
        '--tri1': '#8C6A5D',
        '--tri2': '#3f1f2fff',
    },
    {
        '--pri': '#FFF287',
        '--sec': '#3B060A',
        '--tri1': '#C83F12',
        '--tri2': '#8A0000',
    },
    {
        '--pri': '#FFF5F2',
        '--sec': '#064232',
        '--tri1': '#F5BABB',
        '--tri2': '#568F87',
    },
    {
        '--pri': '#F2EDD1',
        '--sec': '#280A3E',
        '--tri1': '#F9CB99',
        '--tri2': '#689B8A',
    },
    {
        '--pri': '#FBDB93',
        '--sec': '#641B2E',
        '--tri1': '#BE5B50',
        '--tri2': '#8A2D3B',
    },
    {
        '--pri': '#F8F3D9',
        '--sec': '#504B38',
        '--tri1': '#dbca6bff',
        '--tri2': '#B9B28A',
    },
    {
        '--pri': '#FBF5E5',
        '--sec': '#212121',
        '--tri1': '#C890A7',
        '--tri2': '#A35C7A',
    },
    {
        '--pri': '#FFEAD8',
        '--sec': '#2A1458',
        '--tri1': '#E8988A',
        '--tri2': '#9B177E',
    },
    {
        '--pri': '#21e5b1ff',
        '--sec': '#000000',
        '--tri1': '#108969ff',
        '--tri2': '#222222',
    },
    {
        '--pri': '#FBF3D1',
        '--sec': '#5e5546ff',
        '--tri1': '#b7b7acff',
        '--tri2': '#979e74ff',
    },

    {
        '--pri': '#F9E8C9',
        '--sec': '#201658',
        '--tri1': '#98ABEE',
        '--tri2': '#1D24CA',
    },
    {
        '--pri': '#E5E5CB',
        '--sec': '#1A120B',
        '--tri1': '#8f8a69ff',
        '--tri2': '#3C2A21',
    },
    {
        '--pri': '#FFD1E3',
        '--sec': '#392467',
        '--tri1': '#A367B1',
        '--tri2': '#5D3587',
    },
    {
        '--pri': '#E0D9D9',
        '--sec': '#432323',
        '--tri1': '#5A9690',
        '--tri2': '#2F5755',
    },
    // {
    //     '--pri': '#',
    //     '--sec': '#',
    //     '--tri1': '#',
    //     '--tri2': '#',
    // },
]

// let currentIndex = 0;
let currentIndex = Number(localStorage.getItem("storedIndex"));
if(isNaN(currentIndex)){
    currentIndex = 0;
}
function getNextThemeIndex() {
    // let index = currentIndex;
    currentIndex = (currentIndex + 1) % themes.length;
    return currentIndex;
}

function applyTheme(index){
    let theme = themes[index];
    for (const key in theme) {
        rootElement.style.setProperty(key, theme[key]);
    }
    // rootElement.style.setProperty('--pri', `${theme['--pri']}`);
    // rootElement.style.setProperty('--sec', `${theme['--sec']}`);
    // rootElement.style.setProperty('--tri1', `${theme['--tri1']}`);
    // rootElement.style.setProperty('--tri2', `${theme['--tri2']}`);
}

let changeThemeBtn = document.querySelector(".changeTheme");
changeThemeBtn.addEventListener("click", function () {
    // --pri: #F8F4E1;
    // --sec: #381c0a;
    // --tri1: #eea700;
    // --tri2: #74512D;

    let index = getNextThemeIndex();

    localStorage.setItem("storedIndex", index);

    applyTheme(index);
});
applyTheme(Number(localStorage.getItem("storedIndex")));
}

export default themeSection;