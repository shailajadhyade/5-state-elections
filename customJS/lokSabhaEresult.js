var allParty = [],allPartyValue = [], arrOfHC = [], chartArray = [],sumAllPartyValue = 0,sumAllPartyValueLead = 0, sumAllPartyValueWon = 0, stateWiseResDropDef = 33;
var stateWiseResUrl = "http://13.127.2.47/web_api/website/partywise_wonlead_total.php?language=ENGLISH&notif_id=11";
var stateConstUrl = "http://13.127.2.47/web_api/website/statewise_const_tally.php?language=ENGLISH&notif_id=11";
var getName;

var appData = {
    apiConfig: {
        baseURL: 'http://13.127.2.47/web_api/website/',
        suffixes: {
            getState: 'getStates.php',
            partyWiseResults: 'partywise_wonlead_total.php?language=ENGLISH&notif_id=11',
            stateVIP: 'vipcandidates_wonlead.php?language=ENGLISH&notif_id=11',
            stateConstituency: 'statewise_const_tally.php?language=ENGLISH&notif_id=11',
            nationalPerson: 'nationalvipcandidates_wonlead.php?language=ENGLISH&notif_id=11',
            resultType: '?electionType='
        },
    },
}


var partyWiseResultsConfig = {
    "ajax": {
        url: appData.apiConfig.baseURL + appData.apiConfig.suffixes.partyWiseResults,
        dataSrc: 'results'
    },
    "bPaginate": false,
    "aaSorting": [],
    "columns": [{
        "data": "party_name"
    },
    {
        "data": "Seats Contested"
    },
    {
        "data": "lead"
    },
    {
        "data": "won"
    },
    {
        "data": "total"
    },
    {
        "data": "gain+"
    },
    {
        "data": "loss-"
    }
  ]
};

var lokSabhaEresultConfig = {
    "ajax": {
        url:appData.apiConfig.baseURL + appData.apiConfig.suffixes.partyWiseResults,
        dataSrc: 'results'
    },
    "bPaginate": false,
    "aaSorting": [],
    "destroy": true,
    "columns": [{
        "data": "party_name"
    },
    {
        "data": "Seats Contested"
    },
    {
        "data": "lead"
    },
    {
        "data": "won"
    },
    {
        "data": "total"
    },
    {
        "data": "gain+"
    },
    {
        "data": "loss-"
    }
    ]
};


function getJSON(url, successCallback) {
    $.getJSON(url, function(response) {
        successCallback(response);
    });
}

function getLiveStreamURL()
{
    var parentURL = document.referrer;
    //var parentURL = 'https://www.etvbharat.com/bengali/kerala';
    var temp = parentURL.split('/');
    var lang = temp[4];
    var stremingURLs = {
        "andhra-pradesh":"https://etvbharatlive.akamaized.net/hls/live/707618/AndhraPradesh/index.m3u8",
        "assam":"https://etvbharatlive8.akamaized.net/hls/live/710674/assam/index.m3u8",
        "bihar":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/02f52553639b4d009064e46726c53e5e/index.m3u8",
        "chhattisgarh":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/73bfef86beeb474a8ad1110ebfb0dcaa/index.m3u8",
        "delhi":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/a7a3e1bb4ea449ef863f723ccb21350d/index.m3u8",
        "gujarat":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/00aab6f9b7c447f3b74e5111d7a534aa/index.m3u8",
        "haryana":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/c7de750c25704167bb54bcf93c4ca3aa/index.m3u8",
        "himachal-pradesh":"https://etvbharat.pc.cdn.bitgravity.com/etv-hp-primary/channel.m3u8",
        "jharkhand":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/62fe5a83b9334204be251100076b3f2c/index.m3u8",
        "jammu-and-kashmir":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/24541885bb4e4b3494a7ab5188d04e4f/index.m3u8",
        "karnataka":"https://etvbharatlive5.akamaized.net/hls/live/710671/kannada/index.m3u8",
        "kerala":"https://etvbharatlive7.akamaized.net/hls/live/710673/kerala/index.m3u8",
        "maharashtra":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/0ca2549d74e541fabad58454eece62ea/index.m3u8",
        "madhya-pradesh":"https://etvbharatlive1.akamaized.net/hls/live/710294/madhyaPradesh/index.m3u8",
        "english":"https://d2zmy2ox1qkejw.cloudfront.net/out/v1/7b1f79c8d23a43f8869a8fd3648b496a/index.m3u8",
        "urdu":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/24541885bb4e4b3494a7ab5188d04e4f/index.m3u8",
        "odisha":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/aa596f832ba1405c9d0d77317070aaa2/index.m3u8",
        "punjab":"https://etvbharatlive3.akamaized.net/hls/live/710666/punjab/index.m3u8",
        "rajasthan":"https://etvbharatlive2.akamaized.net/hls/live/710296/rajasthan/index.m3u8",
        "tamil-nadu":"https://etvbharatlive6.akamaized.net/hls/live/710672/tamil/index.m3u8",
        "telangana":"https://d2mg5i2aaynulr.cloudfront.net/out/v1/bb6d992d0ad948c4bf110a77a075590e/index.m3u8",
        "uttar-pradesh":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/c4df44b38db04a3c88fc6e6d5fc02282/index.m3u8",
        "uttarakhand":"https://etvbharat.pc.cdn.bitgravity.com/out/v1/20653e455df44cabb0a42e859b75b39f/index.m3u8",
        "west-bengal":"https://etvbharatlive9.akamaized.net/hls/live/710675/westBengal/index.m3u8"
    }
    if(lang)
    {
        var url = stremingURLs[lang.toLowerCase()];
        if(url)
            return url;
            console.log(url);
    }
    return stremingURLs['english'];
}
function getLanguageState(value, stateDdlID) {
    var ele = document.getElementById(stateDdlID);
    getJSON(appData.apiConfig.baseURL + appData.apiConfig.suffixes.getState+'?electionType='+value, function(getStatesresult) {
        renderLanguageState(ele,createDropdownHTML(getStatesresult, 'state_id', 'state_name'));
    });
}
/*
function createDropdownHTML(incomingData, idKey, displayKey) {
    var option = "";
    for (var l = 0; l <= incomingData.results.length - 1; l++) {
        option += '<option value="' + incomingData.results[l][idKey] + '">' + incomingData.results[l][displayKey] + '</option>';
    }
    return option;
}
*/
function renderLanguageState(ele,option) {
    ele.innerHTML = option;
    var exists = false;
    $(ele).find('option').each(function(){
        if (this.value == stateWiseResDropDef) {
            exists = true;
            return false;
        }
    });
    if(exists){
    $(ele).val(stateWiseResDropDef);
    }
    $(ele).trigger("change");
    getName = $( "#stateWiseOption option:selected" ).text();
    $("#stateText").text(getName);
}


function renderLokSabhaChart(arrOfHC, sumAllPartyValue, sumAllPartyValueLead, sumAllPartyValueWon) {
    $("#sumAllPartyValueLead").html(sumAllPartyValueLead);
    $("#sumAllPartyValueWon").html(sumAllPartyValueWon);
    $(".sumAllPartyValue").html(sumAllPartyValue+"/"+"542");


    Highcharts.chart('tally_lok_sabha', {
        chart: {
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -70,
                    style: {
                        fontWeight: 'bold',
                        color: 'black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '50%']
            }
        },

        colors: ["#ff5429", "#00311f", "#128548", "#0255c7", "#ff0000", "#9f0606", "#db7b03", "#41ac38", "#8d8d8d", "#27a4ff"],
        series: [{
            type: 'pie',
            name: '',
            innerSize: '50%',
            data: arrOfHC
        }]
    });
};

function getLokSabhaHighChart() {
    //highchart
    //Tally Lok Sabha
    getJSON(appData.apiConfig.baseURL + appData.apiConfig.suffixes.partyWiseResults, function(result) {
        console.log(chartArray);
        for (var i = 0; i <= result.results.length - 1; i++) {
            var partyInfoArr = result.results[i];
            chartArray.push([partyInfoArr["party_name"], parseInt(partyInfoArr["total"])]);
            sumAllPartyValue += parseInt(partyInfoArr["total"]);
            sumAllPartyValueLead += parseInt(partyInfoArr["lead"]);
            sumAllPartyValueWon += parseInt(partyInfoArr["won"]);
        }
        var arrOfHC = [chartArray[0],chartArray[7],chartArray[5],chartArray[6],chartArray[4],chartArray[2],chartArray[3],chartArray[1]];
        renderLokSabhaChart(arrOfHC, sumAllPartyValue, sumAllPartyValueLead, sumAllPartyValueWon);
    });
}
// national Parssonalities
function getNationalPerson() {
    $.getJSON(appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateVIP, function(success) {
        var nationalPerson = success.results;
        var CombinedHTML = '';
        for (var i = 0; i <= nationalPerson.length - 1; i++) {
            var personailty = {
                img: nationalPerson[i]['cand_pic'],
                candidate: nationalPerson[i]['cand_name'],
                party: nationalPerson[i]['party_name'],
                leadings: nationalPerson[i]['status'],
                constituency: nationalPerson[i]['const_name']
            };
            var leadingBlogElement = "";
            var spanElement = "<span>" + personailty.constituency + "</span>";
            var leadings = "<p>" + personailty.leadings + "</p>";
            if (personailty.leadings.toLowerCase() == "lead") {
                leadingBlogElement = "<div class='leading-blog'>" + leadings + spanElement + "</div>";
            }else if (personailty.leadings.toLowerCase() == "won") {
                leadingBlogElement = "<div class='won-blog'>" + leadings + spanElement + "</div>";
            } else if (personailty.leadings.toLowerCase() == "trailing") {
                leadingBlogElement = "<div class='trailing-blog'>" + leadings + spanElement + "</div>";
            } else {
                leadingBlogElement = "<div>" + spanElement + "</div>";
            }
            var otherSpanElement = "<span>" + personailty.party + "</span>";
            var heder4 = "<h4> " + personailty.candidate + " | " + otherSpanElement + "</h4>";
            var secDiv = "<div class='pers-blg-text col-md-9 col-sm-9 col-xs-9'>" + heder4 + leadingBlogElement + "</div>";
            var img = '<img src="'+personailty.img+'" alt="">';
            var firstDiv = "<div class='img-blg col-md-3 col-sm-3 col-xs-3'>" + img + "</div>";
            var anc = "<a href='#' class='personalities-blg clearfix'>" + firstDiv + secDiv + "</div>";
            CombinedHTML = CombinedHTML + anc;
        }
        $("#nationalPersonalities").html(CombinedHTML);
    });
};

function getVipPerson() {
    $.getJSON(stateWiseResUrl, function(successdata) {
        var PartyInfo_statewise = successdata.results;
        var nationalPersonVIP = successdata.results;
        var CombinedHTMLVIP = '';
        var leadingsVIP = "";
        var leadingBlogElementVIP = "";
        for (var j = 0; j <= nationalPersonVIP.length - 1; j++) {
            var personailtyVIP = {
                img: nationalPerson[i]['cand_pic'],
                candidate: nationalPerson[i]['cand_name'],
                party: nationalPerson[i]['party_name'],
                leadings: nationalPerson[i]['status'],
                constituency: nationalPerson[i]['const_name']
            };
            var spanElementVIP = "<span>" + personailtyVIP.constituency + "</span>";
            if (personailtyVIP.leadings.toLowerCase() == "lead") {
                leadingsVIP = "<p>" + personailtyVIP.leadings + "<i class='fa fa-thumbs-up'>" + "</i>" + "</p>";
                leadingBlogElementVIP = "<div class='vip-leading'>" + leadingsVIP + spanElementVIP + "</div>";
            }else if (personailtyVIP.leadings.toLowerCase() == "won") {
                leadingsVIP = "<p>" + personailtyVIP.leadings + "<i class='fa fa-thumbs-up'>" + "</i>" + "</p>";
                leadingBlogElementVIP = "<div class='vip-leading vip-won'>" + leadingsVIP + spanElementVIP + "</div>";
            }else if (personailtyVIP.leadings.toLowerCase() == "trailing") {
                leadingsVIP = "<p>" + personailtyVIP.leadings + "<i class='fa fa-thumbs-down'>" + "</i>" + "</p>";
                leadingBlogElementVIP = "<div class='vip-leading vip-trailing'>" + leadingsVIP + spanElementVIP + "</div>";
            } else{
                leadingBlogElementVIP = "<div class='vip-leading vip-trailing'>" + spanElementVIP + "</div>";
            }

            var stElementVIP = "<strong>" + personailtyVIP.candidate + "</strong>";
            var paraVIP = "<p> " + stElementVIP + " | " + personailtyVIP.party + "</p>";
            var secDivVIP = "<div class='state-vip-cont clearfix'>" + paraVIP + leadingBlogElementVIP + "</div>";
            var imgVIP = '<img src="'+personailtyVIP.img+'" alt="">';
            var firstDivVIP = "<div href='#' class='vip-img'>" + imgVIP + "</div>";
            var ancVIP = "<a href='#' class='states-vip-blog clearfix'>" + firstDivVIP + secDivVIP + "</div>";
            CombinedHTMLVIP = CombinedHTMLVIP + ancVIP;
        }
     /*   $("#vipCandidates").html(CombinedHTMLVIP);
        $('.vip-img img').off('error').on('error',function(){
        $(this).attr('src','https://etvelection.s3.ap-south-1.amazonaws.com/vipimages/common.jpg')            
        });
       $('.img-blg img').off('error').on('error',function(){
            $(this).attr('src','https://etvelection.s3.ap-south-1.amazonaws.com/vipimages/common.jpg')            
        });*/
    });
}
/*
function onChangeStates(val) {
    if(val)
    {
    $('#state-tg').empty();
    if ($.isNumeric(val)) {
        stateWiseResUrl = appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateVIP + val;
    }
    stateResBind(stateWiseResUrl);
    getVipPerson();
    getName = $( "#stateWiseOption option:selected" ).text();
    $("#stateText").text(getName);
}
}*/
/*
function onChangeConstWise(val) {
    if ($.isNumeric(val)) {
        stateConstUrl = appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateConstituency + val;
    } else {
        stateConstUrl = appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateConstituency;
    }
    constiResBind(stateConstUrl);
}
*/
function stateResBind(url) {
    const tbody = document.querySelector("#state-ap > tbody");
    $.getJSON(url,
        function(successdata) {
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            CombinedHTMLTable = '';
            var stateWiseTotal = 0;
            for (var j = 0; j <= successdata.results.length - 1; j++) {
                var tr = "<tr>" + "<td>" + successdata.results[j]['party_name'] + "</td>" +
                    "<td>" + successdata.results[j]['lead'] + "</td>" +
                    "<td>" + successdata.results[j]['won'] + "</td>" +
                    "<td>" + successdata.results[j]['total'] + "</td>" +
                    "<td>" + successdata.results[j]['gain+'] + "</td>" +
                    "<td>" + successdata.results[j]['loss-'] + "</td>" + "</tr>";
                CombinedHTMLTable = CombinedHTMLTable + tr;
                stateWiseTotal = stateWiseTotal + parseInt(successdata.results[j]['total']);
            }
            $("#StateWiseData").html(CombinedHTMLTable);
            totalCount(successdata, stateWiseTotal)
        });

}

function totalCount(successdata, stateWiseTotal){
    var totalCountStateWise = successdata.results[0].TotalConstituency;
    document.getElementById("stateWiseTotal").textContent = parseInt(stateWiseTotal) +"/"+ parseInt(totalCountStateWise);
}

function callAPiEveryMinute(){    
    stateConstUrl = appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateConstituency + $('#constituencyWise').val();
    stateWiseResUrl = appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateVIP + $('#stateWiseOption').val();;
    constiResBind(stateConstUrl);
    stateResBind(stateWiseResUrl);
    getVipPerson();
}

function getconstiResBind() {
    const tbody = document.querySelector("#AP_Constituency > tbody");
    $.getJSON(appData.apiConfig.baseURL + appData.apiConfig.suffixes.stateConstituency,
        function(successdata) {
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            CombinedHTMLTable = '';
            var tr;
            for (var j = 0; j <= successdata.results.length - 1; j++) {
                if (successdata.results[j]['status'].toLowerCase() == "lead") {
                    tr = "<tr>" + "<td>" + successdata.results[j]['const_name'] + "</td>" +
                        "<td>" + successdata.results[j]['candidate_name'] + "</td>" +
                        "<td>" + successdata.results[j]['party_name'] + "</td>" +
                        "<td class='leading-blog sorting_1'>" + "<p>" + successdata.results[j]['status'] + "</p>" + "</td>" + "</tr>";
                    CombinedHTMLTable = CombinedHTMLTable + tr;
                }else if (successdata.results[j]['status'].toLowerCase() == "won") {
                    tr = "<tr>" + "<td>" + successdata.results[j]['const_name'] + "</td>" +
                        "<td>" + successdata.results[j]['candidate_name'] + "</td>" +
                        "<td>" + successdata.results[j]['party_name'] + "</td>" +
                        "<td class='won-blog sorting_1'>" + "<p>" + successdata.results[j]['status'] + "</p>" + "</td>" + "</tr>";
                    CombinedHTMLTable = CombinedHTMLTable + tr;
                } else {
                    tr = "<tr>" + "<td>" + successdata.results[j]['const_name'] + "</td>" +
                        "<td>" + successdata.results[j]['candidate_name'] + "</td>" +
                        "<td>" + successdata.results[j]['party_name'] + "</td>" +
                        "<td class='trailing-blog sorting_1'>" + "<p>" + successdata.results[j]['status'] + "</p>" + "</td>" + "</tr>";
                    CombinedHTMLTable = CombinedHTMLTable + tr;
                }
            }
            $("#constituency_tbody").html(CombinedHTMLTable);
            $("#tdSearch").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#AP_Constituency tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
}

function atateAssembly(){
    $.getJSON("http://13.127.2.47/web_api/website/vipcandidates_wonlead.php?language=ENGLISH&notif_id=11", function(successdata) {
            CombinedAPTable = '';
            var apAssemblyTotalLead = 0, apAssemblyTotalWon = 0, apAssemblyTotalTotal = 0;
            for (var j = 0; j <= successdata.results.length - 1; j++) {
                var tr = "<tr>" + "<td>" + successdata.results[j]['party_name'] + "</td>" +
                    "<td>" + successdata.results[j]['lead'] + "</td>" +
                    "<td>" + successdata.results[j]['won'] + "</td>" +
                    "<td>" + successdata.results[j]['total'] + "</td>" + "</tr>";
                    CombinedAPTable = CombinedAPTable + tr;
                    apAssemblyTotalLead = apAssemblyTotalLead + parseInt(successdata.results[j]['lead']);
                    apAssemblyTotalWon = apAssemblyTotalWon + parseInt(successdata.results[j]['won']);
                    apAssemblyTotalTotal = apAssemblyTotalTotal + parseInt(successdata.results[j]['total']);
            }
            $("#apAssembly").html(CombinedAPTable);
            $("#apAssemblyTotalLead").html(apAssemblyTotalLead);
            $("#apAssemblyTotalWon").html(apAssemblyTotalWon);
            $(".apAssemblyTotalTotal").html(apAssemblyTotalTotal+"/175");
        });
       /* $.getJSON("https://rut.api.etvbharat.com/ERLIVE/ebapi/mp_statewise_vipcandidate.php?language=te&state=38", function(successdata) {
            CombinedAPTable = '';
            var odAssemblyTotalLead = 0, odAssemblyTotalWon = 0, odAssemblyTotalTotal = 0;
            for (var j = 0; j <= successdata.results.length - 1; j++) {
                var tr = "<tr>" + "<td>" + successdata.results[j]['party_name'] + "</td>" +
                    "<td>" + successdata.results[j]['lead'] + "</td>" +
                    "<td>" + successdata.results[j]['won'] + "</td>" +
                    "<td>" + successdata.results[j]['total'] + "</td>" + "</tr>";
                    CombinedAPTable = CombinedAPTable + tr;
                    odAssemblyTotalLead = odAssemblyTotalLead + parseInt(successdata.results[j]['lead']);
                    odAssemblyTotalWon = odAssemblyTotalWon + parseInt(successdata.results[j]['won']);
                    odAssemblyTotalTotal = odAssemblyTotalTotal + parseInt(successdata.results[j]['total']);
            }
            $("#odAssembly").html(CombinedAPTable);
            $("#odAssemblyTotalLead").html(odAssemblyTotalLead);
            $("#odAssemblyTotalWon").html(odAssemblyTotalWon);
            $(".odAssemblyTotalTotal").html(odAssemblyTotalTotal+"/146");
        });*/
}
atateAssembly();

$(document).ready(function() {
    $('#partyWiseResults').DataTable(partyWiseResultsConfig);
    $('#lokSabhaEresult').DataTable(lokSabhaEresultConfig);
    atateAssembly();
    getLanguageState(1,'stateWiseOption')
    getLanguageState(1,'constituencyWise')
    getLokSabhaHighChart();
    getconstiResBind();
    getNationalPerson();
    var test =getLiveStreamURL();
    var player='<iframe style="width:100%;" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" allowFullScreen="true" class="tally-scroll" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl='+test+'&thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&autoplay=true&mute=true&content_type=live"></iframe>';
    $('#test-player').html(player);
    $("#divPlayer").attr('src' , test);
    //livedebate
    //var test =getLiveDebateurl;
    var player1='<iframe style="width:100%;" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" allowFullScreen="true" class="tally-scroll" src="https://etvbharatimages.akamaized.net/player/etvbharat-staging/embed_etv.html?contenturl='+test+'&thumbnailurl=https://etvwinvideo.akamaized.net/etv-bharat/images/placeholder.png&autoplay=true&mute=true&content_type=live"></iframe>';
    $('#test-player1').html(player1);
    $("#divPlayer").attr('src' , test);
    //setInterval(callAPiEveryMinute, 30000);
    //setInterval(function(){location.href = location.href},30000);
    // setInterval(function(){

    //     $('#partyWiseResults').DataTable(partyWiseResultsConfig);
    //     $('#lokSabhaEresult').DataTable(lokSabhaEresultConfig);
    // },5000);
});