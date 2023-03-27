function onLoad() {
    // var element = document.querySelectorAll('.yvideo');
    // element.style.width = "900";
}

async function getFakePerson() {
    const { results } = await fetch('https://randomuser.me/api').then((res) => res.json());

    var ret = {
        'name': results[0].name.first + " " + results[0].name.last,
        'picture': results[0].picture.large
    };

    return ret;
}
