var myVideo = document.getElementById("myVideo");
var videoBg = document.getElementById("videoBg");

// var id;

$(function() {

    // 高德地图
    init();

    // 点击播放
    $(".box").on("click", function() {
        // setTimeout(function() {
        // }, 500)
        videoBg.src = "./video/bg.mp4";
        videoBg.play();

        // setTimeout(function() {
        audioTrue();
        videoBg.muted = false;

        // }, 100);
        setTimeout(function() {
            $(".box").css("display", "none");
        }, 100);
        // console.log(videoBg.networkState);
    });

    $(".video-box").on("click", function() {
        $(".pic-show").css("display", "none");
    });


    // 音乐控制
    musicFun();

    // 点击循环播放视频
    videoLoop();

    // 点击分享神舞按钮
    $(".btn-share").on("click", function() {
        $("#myVideo").css("display", "none")
        myVideo.pause();

        $(".pic-show").css("display", "block");
        $(".pic-share").css("display", "block");
        $(".pic-share").removeClass("opacity-hide").addClass("opacity-show");
        $(".pic-share").css("opacity", "1");
    });

    // 点击分享
    $(".pic-share").on("click", function() {
        $("#myVideo").css("display", "block");
        $("#btnVideo").css("opacity", "1");
        myVideo.load();

        $(this).removeClass("opacity-show").addClass("opacity-hide");
        $(this).css("opacity", "0");
        setTimeout(function() {
            $(".pic-share").css("display", "none");
        }, 500);
    });


    // 点击播放按钮区域
    $("#btnVideo").on("click", function() {
        if (myVideo.paused) {
            $("#btnVideo").css("opacity", "0");
            myVideo.play();
        } else {
            $("#btnVideo").css("opacity", "1");
            myVideo.pause();
        }
    });

    // 点击视频区域
    $("#myVideo").on("click", function() {
        // alert(videoBg.muted);
        if (myVideo.paused) {
            $("#btnVideo").css("opacity", "0");
            myVideo.play();
        } else {
            $("#btnVideo").css("opacity", "1");
            myVideo.pause();
        }
    });

    // page2小视频播放完
    myVideo.addEventListener('ended', function(e) {
        // 播放结束时触发
        $("#btnVideo").css("opacity", "1");
        myVideo.pause();
        myVideo.load();

    });

});

// 音乐控制
function musicFun() {
    if ($(".page1").css("display") == "block") {
        page1();

        videoBg.addEventListener('ended', function(e) {
            page2();
        });

        $("#music").on("click", function() {
            musicIcon();
        });

    } else {
        page2();

    };
};

function musicIcon() {
    if (videoBg.muted == true) {
        audioTrue();
        videoBg.muted = false;
        // console.log(videoBg.muted);
    } else {
        audioFalse();
        videoBg.muted = true;
    };
};

// 点击循环播放视频
function videoLoop() {
    $(".btn-loop").on("click", function() {
        $(this).addClass("rotate");
        setTimeout(function() {
            $(".btn-loop").removeClass("rotate");
            page1();
        }, 300);
    });
};


function audioTrue() {
    $(".audio-icon").addClass("effect-rotate360");
    $(".audio-bg").css("display", "block");
}

function audioFalse() {
    $(".audio-icon").removeClass("effect-rotate360");
    $(".audio-bg").css("display", "none");
}

function page1() {
    $(".page1").css("display", "block");
    $(".page2").css("display", "none");
    videoBg.load();
    videoBg.play();
    myVideo.pause();

    audioTrue();
    setTimeout(function() {
        videoBg.muted = false;

    }, 300);
};

function page2() {
    // $(".page1").css("background-color", "red");

    $(".page2").css("display", "block");

    setTimeout(function() {
        $(".page1").css("display", "none");

        videoBg.pause();
        myVideo.load();
        myVideo.pause();

        audioFalse();
        videoBg.muted = true;
    }, 500);

};

// 地图
function init() {
    map = new AMap.Map("mapContainer", {
        zoom: 14,
        center: [116.524066, 39.978900]
    });
    marker = new AMap.Marker({
        map: map,
        position: [116.522766, 39.976281]
    })
    marker.setLabel({
        offset: new AMap.Pixel(24, 0), //修改label相对于maker的位置
        content: "展易网898国<br>际会展中心"
    });
    marker.on('click', function(e) {
        marker.markOnAMAP({
            name: '898国际会展中心',
            position: marker.getPosition()
        })
    });
    /*
    map.addControl(new AMap.ToolBar());
    if(AMap.UA.mobile){
        document.getElementById('button_group').style.display='none';
    }
    */
}
