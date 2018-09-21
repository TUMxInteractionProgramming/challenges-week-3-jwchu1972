function clicking() {
    console.log('app alive');
}

function switchChannel(channelName){
    console.log('Tuning into channel '+channelName);
    document.getElementById('chatbarChannelname').innerHTML=channelName;
    var str = 'upgrading.never.helps';
    var result = str.link('http://w3w.co/upgrading.never.helps');
    document.getElementById('location').innerHTML=result;
    document.getElementById('location').style.color='white';
    
}

function changeStar() {
    $('#changeStar').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function starSolid() {
    $('#changeStar').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId) {
    console.log('changing to tab');
    $('.selected').removeClass('selected');
    $('#'+tabId).addClass('selected');

}

function emojiToggle() {
    $('#emojis').toggle();

}


