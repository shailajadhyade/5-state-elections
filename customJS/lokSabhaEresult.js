var allParty = [],
  allPartyValue = [],
  arrOfHC = [],
  chartArray = [],
  sumAllPartyValue = 0,
  sumAllPartyValueLead = 0,
  sumAllPartyValueWon = 0,
  stateWiseResDropDef = 33,
  national = "";

var getName;
var list1 = [],
  list2 = [],
  list3 = [],
  list4 = [],
  list5 = [],
  all_5_states = [];
var url1 =
  "http://mcapi.etvbharat.com/web_api/website/kerala_2021/five_states_common_tally.php";
// var test="";
var stremingURLs;
var appData = {
  apiConfig: {
    baseURL: "https://mcapi.etvbharat.com//web_api/website/",

    suffixes: {
      getState: "getLanguage.php",
      state5Results: "kerala_2021/five_states_common_tally.php",
      tamilnadu: {
        distResult: "tamilnadu_2021/districtwise_party_tally.php",
        constwise: "tamilnadu_2021/statewise_const_tally.php",
        allianceWise: "tamilnadu_2021/partywise_wonlead_total.php",
        viplist: "tamilnadu_2021/vipcandidates_wonlead.php",
      },
      kerala: {
        // http://65.0.40.45/web_api/website/kerala_2021/vipcandidates_wonlead.php
        distResult: "kerala_2021/districtwise_party_tally.php",
        constwise: "kerala_2021/statewise_const_tally.php",
        allianceWise: "kerala_2021/partywise_wonlead_total.php",
        viplist: "kerala_2021/vipcandidates_wonlead.php",
      },
      assam: {
        distResult: "assam_2021/districtwise_party_tally.php",
        constwise: "assam_2021/statewise_const_tally.php",
        allianceWise: "assam_2021/partywise_wonlead_total.php",
        phaseWise: "assam_2021/as_phase.php",
        viplist: "assam_2021/vipcandidates_wonlead.php",
      },
      westBengal: {
        // http://65.0.40.45/web_api/website/westbengal_2021/districtwise_party_tally.php
        distResult: "westbengal_2021/districtwise_party_tally.php",
        constwise: "westbengal_2021/statewise_const_tally.php",
        allianceWise: "westbengal_2021/partywise_wonlead_total.php",
        phaseWise: "westbengal_2021/wb_phase.php",
        viplist: "westbengal_2021/vipcandidates_wonlead.php",
      },
      puducherry: {
        constwise: "puducherry_2021/statewise_const_tally.php",
      },
      partyWiseResults: "partywise_wonlead_total.php?language=english",
      ndaResults: "partywise_wonlead_total_sf.php?language=english",
      mgbResults: "partywise_wonlead_total_tf.php?language=english",
      stateVIP: "vipcandidates_wonlead.php?language=english",
      stateConstituency: "statewise_const_tally.php?language=english",
      nationalPerson: "vipcandidates_wonlead.php?language=english",
      resultType: "?electionType=",
    },
  },
};

function getJSON(url, successCallback) {
  // debugger;
  $.getJSON(url, function (response) {
    successCallback(response);
  });
}

function getLiveStreamURL() {
  var parentURL = document.referrer;
  // var parentURL = 'https://www.etvbharat.com/bengali/kerala';
  var temp = parentURL.split("/");
  var lang = temp[4];
  national = "hindi";
  var lang = "kerala";
  // var lang_state = temp
  // var lang = "national";
  // var national = "urdu";

  var stremingURLs = {
    "andhra-pradesh":
      "https://d1lqvjyfwvyj07.cloudfront.net/out/v1/d54651fa806648719a92727a661fa0d0/ETVB_CF_AP_NewsTime.m3u8",
    assam:
      "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8",
    bihar:
      "https://etvbharatlive3.akamaized.net/hls/live/710666/bihar/index.m3u8",
    chhattisgarh:
      "https://d2lkimnyxc1ji8.cloudfront.net/out/v1/cadefd8c8bff49d4a3ef38c1b3bf6a31/ETVB_CF_CG_NewsTime.m3u8",
    delhi:
      "https://d29q6tdfij96f1.cloudfront.net/out/v1/94b12003316c4d6c9721a1508b0d1bac/ETVB_CF_DL_NewsTime.m3u8",
    gujarat:
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/04fee298badd4ea087aa4b68f4a8c034/ETVB_BG_GJ_NewsTime.m3u8",
    haryana:
      "https://d3ejgzjh1qxqqq.cloudfront.net/out/v1/6d44b1b671d548a6bc95edea325b8413/ETVB_CF_HR_NewsTime.m3u8",
    "himachal-pradesh":
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/a64cd2ff63e14792a4783b6d458ed5ab/ETVB_BG_HP_NewsTime.m3u8",
    jharkhand:
      "https://etvbharatlive2.akamaized.net/hls/live/710296/jharkhand/index.m3u8",
    "jammu-and-kashmir":
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/baf7abc4aceb441abe16f4d636fb80cc/ETVB_BG_UR_NewsTime.m3u8",
    karnataka:
      "https://etvbharatlive5.akamaized.net/hls/live/710671/kannada/index.m3u8",
    kerala:
      "https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8",
    maharashtra:
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/bd4b06bb4ff24d938c3942ee89b1126d/ETVB_BG_MH_NewsTime.m3u8",
    "madhya-pradesh":
      "https://d1i5fpe095d43k.cloudfront.net/out/v1/16a901263bf7402e9cb7ff4b94fa5bfd/ETVB_CF_MP_NewsTime.m3u8",
    english:
      "https://d5i7xalz199bi.cloudfront.net/out/v1/770fb77abc5d4ef487fc8b8b38d60510/ETVB_CF_EN_NewsTime.m3u8",
    urdu: "https://etvbharat.pc.cdn.bitgravity.com/out/v1/baf7abc4aceb441abe16f4d636fb80cc/ETVB_BG_UR_NewsTime.m3u8",
    odisha:
      "https://etvbharatlive.akamaized.net/hls/live/707618/odisha/index.m3u8",
    punjab:
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/68eee6155d904f199aad20af043f9003/ETVB_BG_PB_NewsTime.m3u8",
    rajasthan:
      "https://etvbharat.pc.cdn.bitgravity.com/out/v1/0703d0f945c64e15aef72cd11fd54668/ETVB_BG_RJ_NewsTime.m3u8",
    "tamil-nadu":
      "https://dfae28bzu51al.cloudfront.net/out/v1/ee7ba7ef70fc4005a3992a2c0e8336aa/ETVB_CF_TN_NewsTime.m3u8",
    telangana:
      "https://d1q8rg3smbsux8.cloudfront.net/out/v1/c7849afc704b478fb86a9e2caac3854a/ETVB_CF_TS_NewsTime.m3u8",
    "uttar-pradesh":
      "https://etvbharatlive6.akamaized.net/hls/live/710672/uttarPradesh/index.m3u8",
    uttarakhand:
      "https://etvbharatlive1.akamaized.net/hls/live/710294/uttarakhand/index.m3u8",
    "west-bengal":
      "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8",
  };
  if (national == "hindi"){
   
  }
  if (lang == "assam") {
    var url = stremingURLs[lang.toLowerCase()];
    if (url) assamElection();
    // document.getElementById("state-name").innerHTML = "ASSAM";

    $(".btn-list").hide();
    $(".btn-list1").show();
    $("#other-states").show();
    $("#election-state").show();
    $("#tamil-vip").hide();
    $("#state-name1").hide();

    return url;
  } else if (lang == "west-bengal") {
    var url = stremingURLs[lang.toLowerCase()];
    if (url) westBengalElection();
    // document.getElementById("state-name").innerHTML = "WEST BENGAL";
    $(".btn-list").hide();
    $(".btn-list1").show();
    $("#other-states").show();
    $("#tamil-vip").hide();
    $("#election-state").show();
    $("#state-name1").hide();

    return url;
  } else if (lang == "tamil-nadu") {
    var url = stremingURLs[lang.toLowerCase()];
    if (url) {
      // document.getElementById("state-name").innerHTML = "TAMILNADU";
      $("#other-states").show();
      $("#election-state").show();
      $("#tamil-vip").show();
      $("#state-name1").show();

      tamilnaduElection();
      return url;
    }
  } else if (lang == "kerala") {
    var url = stremingURLs[lang.toLowerCase()];
    if (url) keralaElection();
    // document.getElementById("state-name").innerHTML = "KERALA";
    $("#other-states").show();
    $("#election-state").show();
    $("#tamil-vip").hide();
    $("#state-name1").hide();
    return url;
  } else if (lang == "national") {
    // var url = stremingURLs[lang.toLowerCase()];
    if (national == "urdu") {
      var url = stremingURLs[national.toLowerCase()];
      return url;
    } else if (national == "english") {
      var url = stremingURLs[national.toLowerCase()];
      return url;
    }
  } else if (lang) {
    var url = stremingURLs[lang.toLowerCase()];
    if (url) return url;
    // console.log(url);
    // electionResults();
  }

  return stremingURLs["assam"];
}

function getLanguageState(value, stateDdlID) {
  var ele = document.getElementById(stateDdlID);
  getJSON(
    appData.apiConfig.baseURL +
      appData.apiConfig.suffixes.getState +
      "?electionType=" +
      value,
    function (getStatesresult) {
      renderLanguageState(
        ele,
        createDropdownHTML(getStatesresult, "state_id", "state_name")
      );
    }
  );
}

function createDropdownHTML(incomingData, idKey, displayKey) {
  var option = "";
  for (var l = 0; l <= incomingData.results.length - 1; l++) {
    option +=
      '<option value="' +
      incomingData.results[l][idKey] +
      '">' +
      incomingData.results[l][displayKey] +
      "</option>";
  }
  return option;
}

function renderLanguageState(ele, option) {
  ele.innerHTML = option;
  var exists = false;
  $(ele)
    .find("option")
    .each(function () {
      if (this.value == stateWiseResDropDef) {
        exists = true;
        return false;
      }
    });
  if (exists) {
    $(ele).val(stateWiseResDropDef);
  }
  $(ele).trigger("change");
  getName = $("#stateWiseOption option:selected").text();
  $("#stateText").text(getName);
}

// LiveNews function

function getLiveStateNews() {
  // var test = getLiveStreamURL();
  // // console.log(test, "test")
  // var player =
  //   '<iframe style="width: 100%; height: 342px" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" allowFullScreen="true" class="tally-scroll" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl=' +
  //   test +
  //   '&thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&autoplay=true&mute=true&content_type=live"></iframe>';
  // $("#test-player").html(player);
  // $("#divPlayer").attr("src", test);
  if( national == "hindi" || national == "english"){
    var test1 ='https://dgt6f5s87pgbo.cloudfront.net/out/v1/dd6e383c67c44d20a41a358679edd9c7/ETVB_CF_JK_Live3.m3u8';
    var player='<iframe style="width:100%; margin-top:20px; height:300px;" id="live-player" class="liveplayer" allowfullscreen="true" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl='+test1+'&amp;thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&amp;autoplay=true&amp;mute=true&amp;content_type=live&amp;content_id=keralaml20181012194643400&amp;v=0.007124921779837923&amp;comscorec3=23&amp;state=kerala&amp;language=malayalam&amp;daistream=true" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl=https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8&amp;thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&amp;autoplay=true&amp;mute=true&amp;content_type=live&amp;content_id=keralaml20181012194643400&amp;v=0.007124921779837923&amp;comscorec3=23&amp;state=kerala&amp;language=malayalam&amp;daistream=true"></iframe>';
    $('#test-player').html(player);
    $("#divPlayer").attr('src' , test1);
  }else if( national == "punjabi"){
    var test1 ='https://dgt6f5s87pgbo.cloudfront.net/out/v1/dd6e383c67c44d20a41a358679edd9c7/ETVB_CF_JK_Live3.m3u8';
    var player='<iframe style="width:100%; margin-top:20px; height:300px;" id="live-player" class="liveplayer" allowfullscreen="true" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl='+test1+'&amp;thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&amp;autoplay=true&amp;mute=true&amp;content_type=live&amp;content_id=keralaml20181012194643400&amp;v=0.007124921779837923&amp;comscorec3=23&amp;state=kerala&amp;language=malayalam&amp;daistream=true" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl=https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8&amp;thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&amp;autoplay=true&amp;mute=true&amp;content_type=live&amp;content_id=keralaml20181012194643400&amp;v=0.007124921779837923&amp;comscorec3=23&amp;state=kerala&amp;language=malayalam&amp;daistream=true"></iframe>';
    $('#test-player').html(player);
    $("#divPlayer").attr('src' , test1);
  }else{
    // var test1 ='./images/ads/standard-side-ad-2.jpg';
    var player='<img src="./images/ads/standard-side-ad-2.jpg" style="margin-top: 45px;">';
    $('#test-player').html(player);
    // $("#divPlayer").attr('src' , test1);
  }
  

  // $('#livedebate').css('font-weight','600');
  // $('#livenews').css('color','white');
  // $("#livenews").css("font-weight", "600");
  // $("#livenews").css("color", "#fff");
  // $("#livedebate").css("color", "#70787A");
}

// LiveDebate function

// pudhucherry vip Candidates

// state wise Vip candidates
function getVipResult() {
  $(".col-bg1").css("background-color", "#F1F1F1");
  $("#vip-list").show();
  $("#const-table").hide();
  $("#tdSearch").show();
  $("#tdSearch1").hide();
  var state = document.getElementById("mySelect").value;
  // debugger;
  const tbody = document.querySelector("#AP_Constituency > tbody");
  if(state == "Up"){
    url = "";
  }
  else if(state == "Pb"){
    url = "";
  }else if(state == "Uk"){
    url = "";
  }else if(state == "Goa"){
    url = "";
  }else if(state == "Mn"){
    url = "";
  }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // if (
  //   test ==
  //   "https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8"
  // ) {
  //   url = appData.apiConfig.baseURL + appData.apiConfig.suffixes.kerala.viplist;
  // } else if (
  //   test ==
  //   "https://dfae28bzu51al.cloudfront.net/out/v1/ee7ba7ef70fc4005a3992a2c0e8336aa/ETVB_CF_TN_NewsTime.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.tamilnadu.viplist;
  // } else if (
  //   test ==
  //   "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8"
  // ) {
  //   url = appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.viplist;
  // } else if (
  //   test ==
  //   "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.westBengal.viplist;
  // }

  $.getJSON(url, function (success) {
    var nationalPerson = success.results;
    var CombinedHTML = "";
    for (var i = 0; i <= nationalPerson.length - 1; i++) {
      var personailty = {
        leadings: nationalPerson[i]["status"],
        constituency: nationalPerson[i]["const_name"],
        candidate: nationalPerson[i]["cand_name"],
        party: nationalPerson[i]["party_name"],
        img: nationalPerson[i]["cand_pic"],
      };

      var leadingBlogElement = "";
      var spanElement = "<span>" + personailty.constituency + "</span>";
      var leadings = "<p>" + personailty.leadings + "</p>";
      if (personailty.leadings.toLowerCase() == "lead") {
        leadingBlogElement =
          "<span class='leading-blog'>" + leadings + "</span>";
        var winlose =
          '<div><img class="win" src="images/states/WIN_THUMB.png"  alt=""/></div>';
      } else if (personailty.leadings.toLowerCase() == "won") {
        leadingBlogElement = "<span class='won-blog'>" + leadings + "</span>";
        var winlose =
          '<div><img class="win" src="images/states/WIN_THUMB.png"  alt=""/></div>';
      } else if (personailty.leadings.toLowerCase() == "trailing") {
        leadingBlogElement =
          "<span class='trailing-blog'>" + leadings + "</span>";
        var winlose =
          '<div><img src="images/states/LOOSE_THUMB.png" class="lose" alt=""/></div>';
      } else if (personailty.leadings.toLowerCase() == "lost") {
        leadingBlogElement = "<span class='lost-blog'>" + leadings + "</span>";
        var winlose =
          '<div><img src="images/states/LOOSE_THUMB.png" class="lose" alt=""/></div>';
      } else {
        leadingBlogElement = "<span class='lost-blog'>" + leadings + "</span>";
        // var winlose = '<div><img src="images/states/LOOSE_THUMB.png" class="lose" alt=""/></div>';
      }
      var heder4 =
        "<h4> " +
        personailty.candidate +
        leadingBlogElement +
        "</h4><hr>" +
        "<h4> " +
        personailty.constituency +
        "<span >" +
        personailty.party +
        "</span></h4> ";
      var secDiv =
        "<div class='pers-blg-text col-lg-10 col-md-9 col-sm-10 col-xs-9 no-pad'>" +
        heder4 +
        "</div>";
      var img =
        '<img style="margin-left:0px" id="vip-image" src="https://jh-vip-images.s3.ap-south-1.amazonaws.com/' +
        personailty.img +
        '.jpg" alt="">' +
        winlose;
      var firstDiv =
        "<div class='img-blg col-lg-2 col-md-3 col-sm-2 col-xs-3 no-pad' >" +
        img +
        "</div>" +
        secDiv;
      var anc =
        "<a href='#' class='personalities-blg clearfix '>" +
        firstDiv +
        "</div>";

      CombinedHTML = CombinedHTML + anc;
    }
    $("#constituency_tbody").html(CombinedHTML);

    $(".img-blg img")
      .off("error")
      .on("error", function () {
        $(this).attr(
          "src",
          "https://etvelection.s3.ap-south-1.amazonaws.com/vipimages/common.jpg"
        );
      });
    $("#tdSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#AP_Constituency a").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}
function onChangeStates(val) {
  if (val) {
    $("#state-tg").empty();
    if ($.isNumeric(val)) {
      stateWiseResUrl =
        appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateVIP + val;
    }
    stateResBind(stateWiseResUrl);
    // getVipPerson();
    getName = $("#stateWiseOption option:selected").text();
    $("#stateText").text(getName);
  }
}

function totalCount(successdata, stateWiseTotal) {
  var totalCountStateWise = successdata.results[0].TotalConstituency;
  document.getElementById("stateWiseTotal").textContent =
    parseInt(stateWiseTotal) + "/" + parseInt(totalCountStateWise);
}

function callAPiEveryMinute() {
  stateConstUrl =
    appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateConstituency;
  getconstiResBind(stateConstUrl);
  getNationalPerson();
}

function callTallyEveryMinute() {
  getLokSabhaHighChart();
}

// state wise  Constituency Results

function bannerAdd() {
  // andhrapradesh banner Add
  if (
    test ==
    "https://d1lqvjyfwvyj07.cloudfront.net/out/v1/d54651fa806648719a92727a661fa0d0/ETVB_CF_AP_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591042705-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591042705-0'); });
                            </script>
                          </div>`);
  }
  // bihar banner Add
  else if (
    test ==
    "https://etvbharatlive3.akamaized.net/hls/live/710666/bihar/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619590721177-0' style='width: 728px; height: 90px;'>
                          <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590721177-0'); });
                          </script>
                        </div>`);
  }
  // delhi Banner add
  else if (
    test ==
    "https://d29q6tdfij96f1.cloudfront.net/out/v1/94b12003316c4d6c9721a1508b0d1bac/ETVB_CF_DL_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591521659-0' style='width: 728px; height: 90px;'>
                    <script>
                      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591521659-0'); });
                    </script>
                  </div>`);
  }
  // chattisgarh banner add
  else if (
    test ==
    "https://d2lkimnyxc1ji8.cloudfront.net/out/v1/cadefd8c8bff49d4a3ef38c1b3bf6a31/ETVB_CF_CG_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619672928221-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619672928221-0'); });
                            </script>
                          </div>`);
  }
  // gujarath
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/04fee298badd4ea087aa4b68f4a8c034/ETVB_BG_GJ_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619590647524-0' style='width: 728px; height: 90px;'>
                          <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590647524-0'); });
                          </script>
                        </div>`);
  }
  // haryana
  else if (
    test ==
    "https://d3ejgzjh1qxqqq.cloudfront.net/out/v1/6d44b1b671d548a6bc95edea325b8413/ETVB_CF_HR_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591655993-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591655993-0'); });
                            </script>
                          </div>`);
  }
  // himachal pradesh
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/a64cd2ff63e14792a4783b6d458ed5ab/ETVB_BG_HP_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591814342-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591814342-0'); });
                            </script>
                          </div>`);
  }
  // jharkhand
  else if (
    test ==
    "https://etvbharatlive2.akamaized.net/hls/live/710296/jharkhand/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592055180-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592055180-0'); });
                            </script>
                          </div>`);
  }
  // karnataka
  else if (
    test ==
    "https://etvbharatlive5.akamaized.net/hls/live/710671/kannada/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592490022-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592490022-0'); });
                            </script>
                          </div>`);
  }
  // mahareashtra
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/bd4b06bb4ff24d938c3942ee89b1126d/ETVB_BG_MH_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591246174-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591246174-0'); });
                            </script>
                          </div>`);
  }
  // madhya pradesh
  else if (
    test ==
    "https://d1i5fpe095d43k.cloudfront.net/out/v1/16a901263bf7402e9cb7ff4b94fa5bfd/ETVB_CF_MP_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592125445-0' style='width: 728px; height: 90px;'>
                        <script>
                          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592125445-0'); });
                        </script>
                      </div>`);
  }
  // english
  else if (
    test ==
    "https://d5i7xalz199bi.cloudfront.net/out/v1/770fb77abc5d4ef487fc8b8b38d60510/ETVB_CF_EN_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619590544629-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590544629-0'); });
                            </script>
                          </div`);
  }

  // urdu
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/baf7abc4aceb441abe16f4d636fb80cc/ETVB_BG_UR_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619590881032-0' style='width: 728px; height: 90px;'>
                          <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590881032-0'); });
                          </script>
                        </div>`);
  }
  // jammu and kashmir
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/baf7abc4aceb441abe16f4d636fb80cc/ETVB_BG_UR_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`div id='div-gpt-ad-1619590933874-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590933874-0'); });
                            </script>
                          </div>`);
  }
  // odisha
  else if (
    test ==
    "https://etvbharatlive.akamaized.net/hls/live/707618/odisha/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591308767-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591308767-0'); });
                            </script>
                          </div>`);
  }
  // punjab
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/68eee6155d904f199aad20af043f9003/ETVB_BG_PB_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619591110009-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619591110009-0'); });
                            </script>
                          </div>`);
  }
  // rajasthan
  else if (
    test ==
    "https://etvbharat.pc.cdn.bitgravity.com/out/v1/0703d0f945c64e15aef72cd11fd54668/ETVB_BG_RJ_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592214223-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592214223-0'); });
                            </script>
                          </div>`);
  }
  // telangana
  else if (
    test ==
    "https://d1q8rg3smbsux8.cloudfront.net/out/v1/c7849afc704b478fb86a9e2caac3854a/ETVB_CF_TS_NewsTime.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619590988230-0' style='width: 728px; height: 90px;'>
                        <script>
                          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619590988230-0'); });
                        </script>
                      </div>`);
  }
  // uttar pradesh
  else if (
    test ==
    "https://etvbharatlive6.akamaized.net/hls/live/710672/uttarPradesh/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592365397-0' style='width: 728px; height: 90px;'>
                          <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592365397-0'); });
                          </script>
                        </div>`);
  }
  // uttarakhand
  else if (
    test ==
    "https://etvbharatlive1.akamaized.net/hls/live/710294/uttarakhand/index.m3u8"
  ) {
    $("#BannerAdd")
      .html(`<div id='div-gpt-ad-1619592287168-0' style='width: 728px; height: 90px;'>
                            <script>
                              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619592287168-0'); });
                            </script>
                          </div>`);
  }
}

var test = getLiveStreamURL();
function assamHead() {
  var parties = {
    a: "BJP+",
    b: "INC+",
    c: "AJP",
    d: "OTHERS",
  };
  var thead =
    "<th class='assam1'>" +
    parties.a +
    "</th><th class='assam2'>" +
    parties.b +
    "</th><th class='assam3'>" +
    parties.c +
    "</th><th class='assam4'>" +
    parties.d +
    "</th></tr>";
  return thead;
}
function westHead() {
  var parties = {
    a: "AITC",
    b: "BJP",
    c: "LEFT+",
    d: "OTHERS",
  };
  var thead =
    "<th class='wb1'>" +
    parties.a +
    "</th><th class='wb2'>" +
    parties.b +
    "</th><th class='wb3'>" +
    parties.c +
    "</th><th class='assam4'>" +
    parties.d +
    "</th></tr>";
  return thead;
}
function tamilHead() {
  var parties = {
    a: "ADMK+",
    b: "DMK+",
    c: "MNM+",
    d: "NTK",
    e: "AMMK+",
    f: "OTHERS",
  };
  var thead =
    "<th class='tamil1'>" +
    parties.a +
    "</th><th class='tamil2'>" +
    parties.b +
    "</th><th class='tamil3'>" +
    parties.c +
    "</th><th class='tamil4'>" +
    parties.d +
    "</th>" +
    "<th class='tamil5'>" +
    parties.e +
    "</th><th class='tamil6'>" +
    parties.f +
    "</th></tr>";
  return thead;
}
function keralaHead() {
  var parties = {
    a: "LDF",
    b: "UDF",
    c: "NDA",
    d: "OTH",
  };
  var thead =
    "<th class='class1'>" +
    parties.a +
    "</th><th class='class2'>" +
    parties.b +
    "</th><th class='class3'>" +
    parties.c +
    "</th><th class='class4'>" +
    parties.d +
    "</th></tr>";
  return thead;
}
function electionResults() {
  console.log("hakhkd");
  // var url=appData.apiConfig.baseURL+appData.apiConfig.suffixes.state5Results;
  var url = "./json/kerala.json";
  getJSON(url, function (response) {
    // debugger;
    var arr = [36, 4, 31, 18, 27];
    var totaltally = [292, 126, 234, 140, 30];
    for (var j = 0; j < arr.length; j++) {
      var CombineTable = "";
      var com2 = "";
      var theadh = [];
      var i;

      for (i = 0; i < response.totalresults.length; i++) {
        if (response.totalresults[i]) {
          theadh.push(response.totalresults[i].party_name);
          var trf = "<td>" + response.totalresults[i].lead + "</td>";
          CombineTable = CombineTable + trf;
          var trf2 =
            "<td style='color:green'>" + response.totalresults[i].won + "</td>";
          com2 = com2 + trf2;
        } else if (response.totalresults[i].total_seats == totaltally[j]) {
          var countTally = response.totalresults[i].total_count;
          var totalTally = response.totalresults[i].total_seats;
          var westTotal = countTally + "/" + totalTally;
        }
      }
      if (arr[j] == 36) {
        $("#UpTotal").html(westTotal);
        westBengal(CombineTable, com2, theadh);
      } else if (arr[j] == 4) {
        $("#PbTotal").html(westTotal);
        assam(CombineTable, com2, theadh);
      } else if (arr[j] == 27) {
        $("#UkTotal").html(westTotal);
        puducherry(CombineTable, com2, theadh);
      } else if (arr[j] == 31) {
        $("#tamilTotal").html(westTotal);
        tamilnadu(CombineTable, com2, theadh);
      } else if (arr[j] == 18) {
        $("#keralaTotal").html(westTotal);
        kerala(CombineTable, com2, theadh);
      }
    }
  });
}

function getPrevYear() {
  // $("#previous-year").click(function(){
    var state_el = document.getElementById("mySelect").value;
    if ( state_el == "Up") {
      var frame1 =
        '<iframe title="Uttarpradesh Winners" aria-label="Map" id="datawrapper-chart-Z30ot" src="https://datawrapper.dwcdn.net/Z30ot/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="683"></iframe>';
      $("#iframe-state").html(frame1);
    } else if ( state_el == "Pb") {
      var frame1 =
        '<iframe title="Punjab Winners" aria-label="Map" id="datawrapper-chart-41N0A" src="https://datawrapper.dwcdn.net/41N0A/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="707"></iframe>';
      $("#iframe-state").html(frame1);
    } else if ( state_el == "Uk") {
      var frame1 =
        '<iframe title="Uttarakhand Winners" aria-label="Map" id="datawrapper-chart-I19Oa" src="https://datawrapper.dwcdn.net/I19Oa/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="583"></iframe>';
      $("#iframe-state").html(frame1);
    } else if (state_el == "Goa" ) {
      var frame1 =
        '<iframe title="Goa Winners" aria-label="Map" id="datawrapper-chart-eQjOz" src="https://datawrapper.dwcdn.net/eQjOz/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="683"></iframe>';
      $("#iframe-state").html(frame1);
    }else if( state_el == "Mn"){
      var frame1 =
      '<iframe title="Manipur Winners" aria-label="Map" id="datawrapper-chart-K88PS" src="https://datawrapper.dwcdn.net/K88PS/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="724"></iframe>';
      $("#iframe-state").html(frame1);
    }

  $("button.crnt-year").removeClass("clicked");
  $("button.prev-year").addClass("clicked");
  $("#previous-year").css("color", "white");
  $("#previous-year").css("background-color", "#E00605");
  $("#current-year").css("color", "black");
  $("#current-year").css("background-color", "#949494");
  // });
}
// var state_el = "Up";
function getCrntYear() {
  // $("#current-year").click(function(){
  var state_el = document.getElementById("mySelect").value;
  if ( state_el == "Up") {
    var frame1 =
      '<iframe title="Uttarpradesh Winners" aria-label="Map" id="datawrapper-chart-Z30ot" src="https://datawrapper.dwcdn.net/Z30ot/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="683"></iframe>';
    $("#iframe-state").html(frame1);
  } else if ( state_el == "Pb") {
    var frame1 =
      '<iframe title="Punjab Winners" aria-label="Map" id="datawrapper-chart-41N0A" src="https://datawrapper.dwcdn.net/41N0A/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="707"></iframe>';
    $("#iframe-state").html(frame1);
  } else if ( state_el == "Uk") {
    var frame1 =
      '<iframe title="Uttarakhand Winners" aria-label="Map" id="datawrapper-chart-I19Oa" src="https://datawrapper.dwcdn.net/I19Oa/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="583"></iframe>';
    $("#iframe-state").html(frame1);
  } else if (state_el == "Goa" ) {
    var frame1 =
      '<iframe title="Goa Winners" aria-label="Map" id="datawrapper-chart-eQjOz" src="https://datawrapper.dwcdn.net/eQjOz/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="683"></iframe>';
    $("#iframe-state").html(frame1);
  }else if( state_el == "Mn"){
    var frame1 =
    '<iframe title="Manipur Winners" aria-label="Map" id="datawrapper-chart-K88PS" src="https://datawrapper.dwcdn.net/K88PS/" scrolling="no" frameborder="0" style="border: none;" width="100%" height="724"></iframe>';
    $("#iframe-state").html(frame1);
  }
  $("button.prev-year").removeClass("clicked");
  $("button.crnt-year").addClass("clicked");
  $("#current-year").css("color", "white");
  $("#current-year").css("background-color", "#E00605");
  $("#previous-year").css("color", "black");
  $("#previous-year").css("background-color", "#949494");
  // });
}
function westBengal(CombineTable, com2, theadh) {
  var t =
    "<tr><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[0] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[1] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[2] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[3] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;color:white'>OTH</th></tr>";
  CombineTable = t + "<tr>" + CombineTable + "</tr>";
  $("#Up_data").html(CombineTable);
}
function assam(CombineTable, com2, theadh) {
  var t =
    "<tr><th class='tdata2' style='background: #B80403;font-weight: 700;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[0] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[1] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[2] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[3] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;color:white'>OTH</th></tr>";
  CombineTable =
    t +
    "<tr>" +
    theadh +
    "</tr><tr>" +
    CombineTable +
    // "</tr><tr>" +
    // com2 +
    "</tr>";
  $("#Pb_data").html(CombineTable);
}
function puducherry(CombineTable, com2, theadh) {
  var t =
    "<tr><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[0] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[1] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[2] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[3] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;color:white'>OTH</th></tr><tr>";
  CombineTable =
    t +
    "<tr>" +
    theadh +
    "</tr><tr>" +
    CombineTable +
    // "</tr><tr>" +
    // com2 +
    "</tr>";
  $("#Puducherry_data").html(CombineTable);
}
function tamilnadu(CombineTable, com2, theadh) {
  var t =
    "<tr><th class='tdata1' style='background: #B80403;font-weight: 700;' width='95'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[0] +
    "</div></th><th class='tdata1' style='background: #B80403;font-weight: 700;' width='95'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[1] +
    "</div></th><th class='tdata1' style='background: #B80403;font-weight: 700;' width='95'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[2] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[3] +
    "</div></th><th class='tdata1' style='background: #B80403;font-weight: 700;' width='95'>" +
    theadh[3];
  CombineTable =
    t +
    "<tr>" +
    theadh +
    "</tr><tr>" +
    CombineTable +
    // "</tr><tr>" +
    // com2 +
    "</tr>";
  $("#tamil_nadu").html(CombineTable);
}
function kerala(CombineTable, com2, theadh) {
  var t =
    "<tr><th class='tdata2' style='background: #B80403;font-weight: 700;width: 95px'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[0] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;' width='95'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[1] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;'><div style='border-right: 1px solid #bb454f;' width='100'>" +
    theadh[2] +
    "</div></th><th class='tdata2' style='background: #B80403;font-weight: 700;color:white'>OTH</th> </tr>";
  CombineTable =
    t +
    "<tr>" +
    theadh +
    "</tr><tr>" +
    CombineTable +
    // "</tr><tr>" +
    // com2 +
    "</tr>";
  $("#kerala_data").html(CombineTable);
}

// state wise District result
function getDistrictResult() {
  $(".col-bg1").css("background-color", "#fff");
  $("#vip-list").hide();
  $("#tdSearch").hide();
  $("#tdSearch1").show();
  // $('#dist-search').hide();
  $("#const-table").hide();
  // url = "";
  const tbody = document.querySelector("#AP_Constituency > tbody");
  var state = document.getElementById("mySelect").value;
  // debugger;
  if(state == "Up"){
    url = "./json/t.json";
  }
  else if(state == "Pb"){
    url = "./json/t.json";
  }else if(state == "Uk"){
    url = "./json/t.json";
  }else if(state == "Goa"){
    url = "./json/t.json";
  }else if(state == "Mn"){
    url = "./json/t.json";
  }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // if (
  //   test ==
  //   "https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.kerala.distResult;
  // } else if (
  //   test ==
  //   "https://dfae28bzu51al.cloudfront.net/out/v1/ee7ba7ef70fc4005a3992a2c0e8336aa/ETVB_CF_TN_NewsTime.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.tamilnadu.distResult;
  // } else if (
  //   test ==
  //   "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.distResult;
  // } else if (
  //   test ==
  //   "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.westBengal.distResult;
  // } else {
  //   url = null;
  // }
  $.getJSON(url, function (successdata) {
    // 6
    
    if (
      url ==
      appData.apiConfig.baseURL + appData.apiConfig.suffixes.kerala.distResult
    ) {
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + keralaHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var tr = "";
      var distresults = successdata.results;
      for (var i = 0; i <= distresults.length - 1; i++) {
        tr =
          "<tr><td class='dist1' colspan=5> " +
          distresults[i].dist_name +
          "<span>&nbsp;&nbsp;(" +
          distresults[i].count_seats +
          "/" +
          distresults[i].total_seats +
          ")</span></td></tr>" +
          "<tr><td class='lead1'> Lead </td>" +
          "<td class='edhyna'>" +
          distresults[i].ldf_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].udf_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].nda_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].oth_lead +
          "</td></tr>" +
          "<tr style='color: #05601C;'class='lead1'><td>Won</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].ldf_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].udf_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].nda_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].oth_won +
          "</td></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
      $("#constituency_tbody").html(CombinedHTMLTable);
    } else if (
      url ==
      appData.apiConfig.baseURL +
        appData.apiConfig.suffixes.tamilnadu.distResult
    ) {
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + tamilHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var tr = "";
      var distresults = successdata.results;
      for (var i = 0; i <= distresults.length - 1; i++) {
        tr =
          "<tr><td class='dist1' colspan=7> " +
          distresults[i].dist_name +
          "<span>&nbsp;&nbsp;(" +
          distresults[i].count_seats +
          "/" +
          distresults[i].total_seats +
          ")</span></td></tr>" +
          "<tr><td class='lead1'> Lead </td>" +
          "<td class='edhyna'>" +
          distresults[i].admk_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].dmk_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].mnm_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].ntk_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].ammk_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].oth_lead +
          "</td></tr>" +
          "<tr style='color: #05601C;'class='lead1'><td>Won</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].admk_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].dmk_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].mnm_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].ntk_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].ammk_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].oth_won +
          "</td></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
      $("#constituency_tbody").html(CombinedHTMLTable);
    } else if (
    
      url ==
      appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.distResult
    ) {
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + assamHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var tr = "";
      var distresults = successdata.results;
      for (var i = 0; i <= distresults.length - 1; i++) {
        tr =
          "<tr><td class='dist1' colspan=5> " +
          distresults[i].dist_name +
          "<span>&nbsp;&nbsp;(" +
          distresults[i].count_seats +
          "/" +
          distresults[i].total_seats +
          ")</span></td></tr>" +
          "<tr><td class='lead1'> Lead </td>" +
          "<td class='edhyna'>" +
          distresults[i].bjp_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].inc_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].ajp_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].oth_lead +
          "</td></tr>" +
          "<tr style='color: #05601C;'class='lead1'><td>Won</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].bjp_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].inc_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].ajp_won +
          "</td>" +
          "<td style='color: #05601C;' class='edhyna'>" +
          distresults[i].oth_won +
          "</td></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
      $("#constituency_tbody").html(CombinedHTMLTable);
    } else if (
      url == "./json/t.json"
      // appData.apiConfig.baseURL +
        // appData.apiConfig.suffixes.westBengal.distResult
    ) {
      // debugger
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + westHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var tr = "";
      var distresults = successdata.results;
      for (var i = 0; i <= distresults.length - 1; i++) {
        tr =
          "<tr><td class='dist1' colspan=5> " +
          distresults[i].dist_name +
          "<span>&nbsp;&nbsp;(" +
          distresults[i].count_seats +
          "/" +
          distresults[i].total_seats +
          ")</span></td></tr>" +
          "<tr><td style='color: #05601C;' class='lead1'> Lead/Won </td>" +
          "<td class='edhyna'>" +
          distresults[i].aitc_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].bjp_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].left_lead +
          "</td>" +
          "<td class='edhyna'>" +
          distresults[i].oth_lead +
          "</td></tr>" ;
          // "<tr style='color: #05601C;'class='lead1'><td>Won</td>" +
          // "<td style='color: #05601C;' class='edhyna'>" +
          // distresults[i].aitc_won +
          // "</td>" +
          // "<td style='color: #05601C;' class='edhyna'>" +
          // distresults[i].bjp_won +
          // "</td>" +
          // "<td style='color: #05601C;' class='edhyna'>" +
          // distresults[i].left_won +
          // "</td>" +
          // "<td style='color: #05601C;' class='edhyna'>" +
          // distresults[i].oth_won +
          // "</td></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
      $("#constituency_tbody").html(CombinedHTMLTable);
    }
    searchfun();
  });
}
function searchfun() {
  $("#tdSearch1").on("keyup", function () {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("tdSearch1");
    filter = input.value.toUpperCase();
    table = document.getElementById("AP_Constituency");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i = i + 3) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          tr[i + 1].style.display = "";
          tr[i + 2].style.display = "";
        } else {
          tr[i].style.display = "none";
          tr[i + 1].style.display = "none";
          tr[i + 2].style.display = "none";
        }
      }
    }
  });
}
// state wise party results
function getPartyResult() {
  $("#vip-list").hide();
  $("#const-table").hide();
  $("#tdSearch").show();
  $("#tdSearch1").hide();
  url ="";
  const tbody = document.querySelector("#AP_Constituency > tbody");
  var state = document.getElementById("mySelect").value;
  // debugger;
  if(state == "Up"){
    url = "";
  }
  else if(state == "Pb"){
    url = "";
  }else if(state == "Uk"){
    url = "";
  }else if(state == "Goa"){
    url = "";
  }else if(state == "Mn"){
    url = "";
  }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  
  // debugger;
  // if(state == "Up"){
  //   url = "./json/alliance.json";
  // }
  // if (
  //   test ==
  //   "https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.kerala.allianceWise;
  // } else if (
  //   test ==
  //   "https://dfae28bzu51al.cloudfront.net/out/v1/ee7ba7ef70fc4005a3992a2c0e8336aa/ETVB_CF_TN_NewsTime.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.tamilnadu.allianceWise;
  // } else if (
  //   test ==
  //   "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.allianceWise;
  // } else if (
  //   test ==
  //   "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.westBengal.allianceWise;
  // }
  $.getJSON(url, function (successdata) {
    // while (tbody.firstChild) {
    //   tbody.removeChild(tbody.firstChild);
    // }
    CombinedHTMLTable = "";
    var tr;
    var thead = "";
    thead = `<tr><th class='party-class'></th><th class='party-class'> Lead</th><th class='party-class'>Won</th><th class='party-class'>Total</th></tr>`;
    CombinedHTMLTable = CombinedHTMLTable + thead;
    tr =
      "<tr>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[0]["party_name"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[0]["lead"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[0]["won"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[0]["total"] +
      "</td>" +
      "</tr>";
    CombinedHTMLTable = CombinedHTMLTable + tr;
    for (var j = 0; j <= successdata.results.length - 1; j++) {
      if (
        (successdata.results[j]["alliance_name"] == "LDF" ||
          successdata.results[j]["alliance_name"] == "ADMK+" ||
          successdata.results[j]["alliance_name"] == "AITC" ||
          successdata.results[j]["alliance_name"] == "BJP+") &&
        successdata.results[j]["alliance_name"] !=
          successdata.results[j]["party_name"]
      ) {
        tr =
          "<tr>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["lead"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["won"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["total"] +
          "</td>" +
          "</tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
    }
    tr =
      "<tr>" +
      "<td class='ldf-party'  style='font-weight: 700;'>" +
      successdata.results[1]["party_name"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[1]["lead"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[1]["won"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[1]["total"] +
      "</td>" +
      "</tr>";
    CombinedHTMLTable = CombinedHTMLTable + tr;
    for (var j = 0; j <= successdata.results.length - 1; j++) {
      if (
        (successdata.results[j]["alliance_name"] == "UDF" ||
          successdata.results[j]["alliance_name"] == "DMK+" ||
          successdata.results[j]["alliance_name"] == "BJP" ||
          successdata.results[j]["alliance_name"] == "INC+") &&
        successdata.results[j]["alliance_name"] !=
          successdata.results[j]["party_name"]
      ) {
        tr =
          "<tr>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["lead"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["won"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["total"] +
          "</td>" +
          "</tr><tr></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
    }
    tr =
      "<tr>" +
      "<td class='ldf-party'  style='font-weight: 700;'>" +
      successdata.results[2]["party_name"] +
      "</td>" +
      "<td class='ldf-party' style='font-weight: 700;' >" +
      successdata.results[2]["lead"] +
      "</td>" +
      "<td  class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[2]["won"] +
      "</td>" +
      "<td  class='ldf-party' style='font-weight: 700;'>" +
      successdata.results[2]["total"] +
      "</td>" +
      "</tr> <tr></tr>";
    CombinedHTMLTable = CombinedHTMLTable + tr;
    for (var j = 0; j <= successdata.results.length - 1; j++) {
      if (
        (successdata.results[j]["alliance_name"] == "NDA" ||
          successdata.results[j]["alliance_name"] == "MNM+" ||
          successdata.results[j]["alliance_name"] == "LEFT+" ||
          successdata.results[j]["alliance_name"] == "AJP") &&
        successdata.results[j]["alliance_name"] !=
          successdata.results[j]["party_name"]
      ) {
        tr =
          "<tr>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["lead"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["won"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["total"] +
          "</td>" +
          "</tr> <tr></tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
    }
    if (
      url ==
      appData.apiConfig.baseURL +
        appData.apiConfig.suffixes.tamilnadu.allianceWise
    ) {
      tr =
        "<tr>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["party_name"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["lead"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["won"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["total"] +
        "</td>" +
        "</tr> <tr></tr>";
      CombinedHTMLTable = CombinedHTMLTable + tr;
      for (var j = 0; j <= successdata.results.length - 1; j++) {
        if (
          successdata.results[j]["alliance_name"] == "NTK" &&
          successdata.results[j]["alliance_name"] !=
            successdata.results[j]["party_name"]
        ) {
          tr =
            "<tr>" +
            "<td>" +
            successdata.results[j]["party_name"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["lead"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["won"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["total"] +
            "</td>" +
            "</tr> <tr></tr>";
          CombinedHTMLTable = CombinedHTMLTable + tr;
        }
      }
      tr =
        "<tr>" +
        "<td  class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[4]["party_name"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[4]["lead"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[4]["won"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[4]["total"] +
        "</td>" +
        "</tr> <tr></tr>";
      CombinedHTMLTable = CombinedHTMLTable + tr;
      for (var j = 0; j <= successdata.results.length - 1; j++) {
        if (
          successdata.results[j]["alliance_name"] == "AMMK+" &&
          successdata.results[j]["alliance_name"] !=
            successdata.results[j]["party_name"]
        ) {
          tr =
            "<tr>" +
            "<td>" +
            successdata.results[j]["party_name"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["lead"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["won"] +
            "</td>" +
            "<td>" +
            successdata.results[j]["total"] +
            "</td>" +
            "</tr> <tr></tr>";
          CombinedHTMLTable = CombinedHTMLTable + tr;
        }
      }
      tr =
        "<tr>" +
        "<td  class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[5]["party_name"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[5]["lead"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[5]["won"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[5]["total"] +
        "</td>" +
        "</tr> <tr></tr>";
      CombinedHTMLTable = CombinedHTMLTable + tr;
    } else {
      tr =
        "<tr>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["party_name"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["lead"] +
        "</td>" +
        "<td class='ldf-party' style='font-weight: 700;'>" +
        successdata.results[3]["won"] +
        "</td>" +
        "<td class='ldf-party'style='font-weight: 700;'>" +
        successdata.results[3]["total"] +
        "</td>" +
        "</tr> <tr></tr>";
      CombinedHTMLTable = CombinedHTMLTable + tr;
    }
    $("#constituency_tbody").html(CombinedHTMLTable);
    $("#tdSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#AP_Constituency tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}
// state wise constituency results
function getConstResult() {
  $(".col-bg1").css("background-color", "#fff");
  $("#vip-list").hide();
  $("#tdSearch").show();
  $("#tdSearch1").hide();
  $("#const-table").show();

  const tbody = document.querySelector("#AP_Constituency > tbody");
  var state = document.getElementById("mySelect").value;
  // debugger;
  if(state == "Up"){
    url = "";
  }
  else if(state == "Pb"){
    url = "";
  }else if(state == "Uk"){
    url = "";
  }else if(state == "Goa"){
    url = "";
  }else if(state == "Mn"){
    url = "";
  }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // if (
  //   test ==
  //   "https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.kerala.constwise;
  // } else if (
  //   test ==
  //   "https://dfae28bzu51al.cloudfront.net/out/v1/ee7ba7ef70fc4005a3992a2c0e8336aa/ETVB_CF_TN_NewsTime.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.tamilnadu.constwise;
  // } else if (
  //   test ==
  //   "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.constwise;
  // } else if (
  //   test ==
  //   "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.westBengal.constwise;
  // }
  $.getJSON(url, function (successdata) {
    
    CombinedHTMLTable = "";
    var tr;
    var thead = "";
    thead = `<tr class="const-row">
            <th id="const-header"  style= "background-color: rgb(155, 167, 176);">CONSTITUENCY</th>
            <th id="candidate-header"  style= "background-color: rgb(155, 167, 176);">CANDIDATE</th>
            <th id="party-header" style= "background-color: rgb(155, 167, 176);">PARTY</th>
            <th id="status-header" style= "background-color: rgb(155, 167, 176);">STATUS</th>
          </tr>`;
    CombinedHTMLTable = CombinedHTMLTable + thead;
    for (var j = 0; j <= successdata.results.length - 1; j++) {
      if (successdata.results[j]["status"].toLowerCase() == "lead") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td class='leading-blog sorting_1'>" +
          "<p>" +
          successdata.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      } else if (successdata.results[j]["status"].toLowerCase() == "won") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td class='won-blog sorting_1'>" +
          "<p>" +
          successdata.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      } else if (successdata.results[j]["status"].toLowerCase() == "lost") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td class='lost-blog sorting_1'>" +
          "<p>" +
          successdata.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      } else {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          successdata.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          successdata.results[j]["party_name"] +
          "</td>" +
          "<td class='trailing-blog sorting_1'>" +
          "<p>" +
          successdata.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        CombinedHTMLTable = CombinedHTMLTable + tr;
      }
    }
    $("#constituency_tbody").html(CombinedHTMLTable);

    $("#tdSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#AP_Constituency tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}
// assam and west bengal phase wise results
function PhaseR(assamp, distresults, CombinedHTMLTable) {
  for (var j = 0; j < assamp.length; j++) {
    var CombineTable = "";
    var com2 = "";
    var leadphase;
    var totalphase;
    for (var i = 0; i < distresults.length; i++) {
      if (distresults[i].phase_name == assamp[j]) {
        if (!distresults[i].party_name) {
          trf = "";
          trf2 = "";
          countphase = distresults[i].phase_count_seats;
          totalphase = distresults[i].phase_total_seats;
        } else {
          var trh = distresults[i].phase_name;
          var trf = "<td  class='edhyna'>" + distresults[i].lead + "</td>";
          CombineTable = CombineTable + trf;
          var trf2 =
            "<td style='color: #05601C;' class='edhyna'>" +
            distresults[i].won +
            "</td>";
          com2 = com2 + trf2;
        }
      }
    }
    CombinedHTMLTable =
      CombinedHTMLTable +
      "<tr><td  class='dist1' colspan=5>" +
      trh +
      "<span>&nbsp;&nbsp;(" +
      countphase +
      "/" +
      totalphase +
      ")</span></td><tr><td class='lead1'> Lead</td>" +
      CombineTable +
      "</tr><tr><td  style='color: #05601C;'class='lead1'> Won</td>" +
      com2 +
      "</tr>";
    $("#constituency_tbody").html(CombinedHTMLTable);
  }
}
function getPhaseResult() {
  $(".col-bg1").css("background-color", "#fff");
  $("#vip-list").hide();
  $("#const-table").hide();
  $("#tdSearch1").show();
  $("#tdSearch").hide();

  const tbody = document.querySelector("#AP_Constituency > tbody");
  var state = document.getElementById("mySelect").value;
  // debugger;
  if(state == "Up"){
    url = "";
  }
  else if(state == "Pb"){
    url = "";
  }else if(state == "Uk"){
    url = "";
  }else if(state == "Goa"){
    url = "";
  }else if(state == "Mn"){
    url = "";
  }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // if (
  //   test ==
  //   "https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.phaseWise;
  // } else if (
  //   test ==
  //   "https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
  // ) {
  //   url =
  //     appData.apiConfig.baseURL +
  //     appData.apiConfig.suffixes.westBengal.phaseWise;
  // }
  $.getJSON(url, function (successdata) {
    // while (tbody.firstChild) {
    //   tbody.removeChild(tbody.firstChild);
    // }
    if (
      url ==
      appData.apiConfig.baseURL + appData.apiConfig.suffixes.assam.phaseWise
    ) {
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + assamHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var distresults = successdata.totalresults;
      var assamp = ["PHASE-1", "PHASE-2", "PHASE-3"];
      PhaseR(assamp, distresults, CombinedHTMLTable);
    } else if (
      url ==
      appData.apiConfig.baseURL +
        appData.apiConfig.suffixes.westBengal.phaseWise
    ) {
      CombinedHTMLTable = "";
      var thead = "";
      thead = "<tr>" + "<th class='table-h'></th>" + westHead();
      CombinedHTMLTable = CombinedHTMLTable + thead;
      var distresults = successdata.totalresults;
      var westp = [
        "PHASE-1",
        "PHASE-2",
        "PHASE-3",
        "PHASE-4",
        "PHASE-5",
        "PHASE-6",
        "PHASE-7",
        "PHASE-8",
      ];
      console.log(distresults, "assm");
      PhaseR(westp, distresults, CombinedHTMLTable);
    }
    searchfun();
  });
}

function assamElection() {
  var img1 =
    " <img src='images/states/assam.jpg' alt='' style='width:300; height: 250;' />";
  $("#state-img").html(img1);
  $("#BannerAdd")
    .html(`<div id='div-gpt-ad-1619084890267-0' style='width: 728px; height: 90px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619084890267-0'); });
  </script>
</div>`);
  $("#web-add")
    .html(`<div id='div-gpt-ad-1619690557572-0' style='width: 300px; height: 250px;'>
                    <script>
                      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619690557572-0'); });
                    </script>
                  </div>`);
  $("#web-add1")
    .html(`<div id='div-gpt-ad-1619693831909-0' style='width: 300px; height: 250px;'>
                  <script>
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619693831909-0'); });
                  </script>
                  </div>`);
}
function westBengalElection() {
  var img1 =
    "<img src='images/states/westbengal_300_250.jpg' alt='' style='width:300; height: 250;' />";
  $("#state-img").html(img1);
  $("#BannerAdd")
    .html(`<div id='div-gpt-ad-1619084795127-0' style='width: 728px; height: 90px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619084795127-0'); });
  </script>
</div>`);
  $("#web-add")
    .html(`<div id='div-gpt-ad-1619693965889-0' style='width: 300px; height: 250px;'>
                    <script>
                      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619693965889-0'); });
                    </script>
                  </div>`);
  $("#web-add1")
    .html(`<div id='div-gpt-ad-1619693992826-0' style='width: 300px; height: 250px;'>
                    <script>
                      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619693992826-0'); });
                    </script>
                    </div>`);
}
function keralaElection() {
  var img1 =
    "<img src='images/states/kerala.jpg' alt='hello' style='width:300; height: 250;' />";
  $("#state-img").html(img1);
  $("#BannerAdd")
    .html(`<div id='div-gpt-ad-1619085131490-0' style='width: 728px; height: 90px;'>
                      <script>
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619085131490-0'); });
                      </script>
                    </div>`);
  $("#web-add")
    .html(`<div id='div-gpt-ad-1619694076984-0' style='width: 300px; height: 250px;'>
                        <script>
                          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619694076984-0'); });
                        </script>
                      </div>`);
  $("#web-add1")
    .html(`<div id='div-gpt-ad-1619694049650-0' style='width: 300px; height: 250px;'>
                    <script>
                      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619694049650-0'); });
                    </script>
                  </div>`);
}
function tamilnaduElection() {
  var img1 =
    " <img src='images/states/tamilnadu.jpg' alt=''style='width:300; height: 250;' />";
  $("#state-img").html(img1);
  $("#BannerAdd")
    .html(`<div id='div-gpt-ad-1619085076269-0' style='width: 728px; height: 90px;'>
          <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619085076269-0'); });
          </script>
        </div>`);
  $("#BannerAdd1")
    .html(`<div id='div-gpt-ad-1619085019384-0' style='width: 300px; height: 250px;'>
        <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619085019384-0'); });
        </script>
        </div>`);
  $("#web-add")
    .html(`<div id='div-gpt-ad-1619693895857-0' style='width: 300px; height: 250px;'>
                        <script>
                          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619693895857-0'); });
                        </script>
                        </div>`);
  $("#web-add1")
    .html(`<div id='div-gpt-ad-1619693924710-0' style='width: 300px; height: 250px;'>
                      <script>
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1619693924710-0'); });
                      </script>
                      </div>`);

  getPcConst();
}
function getPcConst() {
  var puducherry_table = "";
  var url =
    appData.apiConfig.baseURL + appData.apiConfig.suffixes.puducherry.constwise;
  $.getJSON(url, function (response) {
    for (var j = 0; j <= response.results.length - 1; j++) {
      if (response.results[j]["status"].toLowerCase() == "lead") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          response.results[j]["party_name"] +
          "</td>" +
          "<td class='leading-blog sorting_1'>" +
          "<p>" +
          response.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        puducherry_table = puducherry_table + tr;
      } else if (response.results[j]["status"].toLowerCase() == "won") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          response.results[j]["party_name"] +
          "</td>" +
          "<td class='won-blog sorting_1'>" +
          "<p>" +
          response.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        puducherry_table = puducherry_table + tr;
      } else if (response.results[j]["status"].toLowerCase() == "lost") {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          response.results[j]["party_name"] +
          "</td>" +
          "<td class='lost-blog sorting_1'>" +
          "<p>" +
          response.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        puducherry_table = puducherry_table + tr;
      } else {
        tr =
          "<tr>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["const_name"] +
          "</td>" +
          "<td style='padding-left: 15px;text-align: initial;'>" +
          response.results[j]["candidate_name"] +
          "</td>" +
          "<td>" +
          response.results[j]["party_name"] +
          "</td>" +
          "<td class='trailing-blog sorting_1'>" +
          "<p>" +
          response.results[j]["status"] +
          "</p>" +
          "</td>" +
          "</tr>";
        puducherry_table = puducherry_table + tr;
      }
    }
    $("#Pc_Constituency1>tbody").html(puducherry_table);

    $("#tdSearch2").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#Pc_Constituency1 tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}
// var state_el="";
function selectState(){
  var state_el = document.getElementById("mySelect").value;
  if (state_el == "Up"){
    
    document.getElementById("state-name").innerHTML = "UTTARPRADESH";
    
  }else if( state_el == "Pb"){
    
    document.getElementById("state-name").innerHTML = "PUNJAB";
  }else if( state_el == "Uk"){
    
    document.getElementById("state-name").innerHTML = "UTTARAKHAND";
  }else if( state_el == "Goa"){
    
    document.getElementById("state-name").innerHTML = "GOA";
  }else if( state_el == "Mn"){
    
    document.getElementById("state-name").innerHTML = "MANIPUR";
  }
  getCrntYear();
  getDistrictResult();

}
$(document).ready(function () {
  $("#vip-list").hide();
  electionResults();
  getLiveStateNews();
  bannerAdd();
  // setInterval(() => {
  //   electionResults();
  // }, 30000);
  getDistrictResult();
  selectState();
  // getCrntYear();

  setInterval(() => {
    if ($("button.prev-year").hasClass("clicked")) {
      getPrevYear();
    } else if ($("button.crnt-year").hasClass("clicked")) {
      getCrntYear();
    }
  }, 30000);

  setInterval(() => {
    if ($("button.dist").hasClass("clicked")) {
      getDistrictResult();
    } else if ($("button.const").hasClass("clicked")) {
      // document.getElementById('tdSearch').value;
      getConstResult();
    } else if ($("button.party").hasClass("clicked")) {
      // document.getElementById('tdSearch').value;
      getPartyResult();
    } else if ($("button.vip").hasClass("clicked")) {
      // document.getElementById('tdSearch').value;
      getVipResult();
    } else if ($("button.phase").hasClass("clicked")) {
      // document.getElementById('tdSearch').value;
      getPhaseResult();
    }
    getPcConst();
  }, 30000);
});
