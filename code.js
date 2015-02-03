$(".user-info.user-only").prepend('<div class="cust0m_settings"> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Pro Reihe maximal:</div> ' +
'        <div id="cust0m_input_anzahl" class="cust0m_input" contenteditable="true"></div> ' +
'        <div class="cust0m_label">Vorschaubilder</div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Vorschaubilder Größe:</div> ' +
'        <div id="cust0m_input_thumbs" class="cust0m_input" contenteditable="true"></div> ' +
'        <div class="cust0m_label">%</div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Bilder Mindesthöhe:</div> ' +
'        <div id="cust0m_input_width" class="cust0m_input" contenteditable="true"></div> ' +
'        <div class="cust0m_label">px</div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Großes Bild laden</div> ' +
'        <div id="cust0m_input_fullsize" class="cust0m_triggers"> ' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> ' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> ' +
'        </div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare in die Mitte:</div> ' +
'        <div id="cust0m_input_pos" class="cust0m_triggers"> ' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> ' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> ' +
'        </div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Admin Sicht:</div> ' +
'        <div id="cust0m_input_admin" class="cust0m_triggers"> ' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> ' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> ' +
'        </div> ' +
'    </div> ' +
'    <div class="cust0m_middle"> ' +
'        <div class="cust0m_label cust0m_lable_1">Benis anzeigen:</div> ' +
'        <div id="cust0m_input_benis" class="cust0m_triggers"> ' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> ' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> ' +
'        </div> ' +
'    </div> ' +
'    <div class="cust0m_line"></div> ' +
'    <div id="cust0m_save" class="cust0m_button">speichern</div> ' +
'    <div id="cust0m_info" class="cust0m_button" style="display: none">gespeichert</div> ' +
'</div> ');

$(".user-name.head-link").after('<div class="cust0m_benis_head">mm</div><div class="cust0m_benis_num">1009</div>');
$("#tab-top").after('<a id="tab-top" class="head-tab" href="/top">beliebt</a>');

if($(".user-name.head-link").text() != "") setInterval(function() { $.ajax(
{
    url: "http://pr0gramm.com/api/user/info?name=" + $(".user-name.head-link").text() + "&flags=1&self=true",
    success: function(data)
    {
        $(".cust0m_benis_num").text(JSON.parse(data).user.score);
    }
}); }, 30000);

var g = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
g.text = 'cust0m = {};' +
'cust0m.fullsize = true;' +
'cust0m.benis = 1000;' +
'' +
"setInterval(function() {if($(window).height() > $('body').height() - 400) {$(window).scroll(); console.log('scroll event');}}, 1500);" +
'' +
'p.Stream.prototype._processResponse = function (data) { ' +
'        if (!data.items || !data.items.length) {' +
'            return null;' +
'        }' +
'       var tempItems = [];' +
'       for (var i = 0; i < data.items.length; i++) {' +
'           if (i >= data.items.length - 1 || (cust0m.benis >= 0 && data.items[i].up - data.items[i].down > cust0m.benis) || (cust0m.benis < 0 && data.items[i].up - data.items[i].down < cust0m.benis)) {' +
'               tempItems.push(data.items[i]);' +
'           }' +
'       }' +
'debugger;' +
'       data.items = tempItems;' +
'        this.reached.start = data.atStart || this.reached.start;' +
'        this.reached.end = data.atEnd || this.reached.end;' +
'        var oldestId, newestId;' +
'        if (this.options.promoted) {' +
'            data.items.sort(p.Stream.sortByPromoted);' +
'            oldestId = data.items[data.items.length - 1].promoted;' +
'            newestId = data.items[0].promoted;' +
'        } else {' +
'            data.items.sort(p.Stream.sortById);' +
'            oldestId = data.items[data.items.length - 1].id;' +
'            newestId = data.items[0].id;' +
'        }' +
'        var position = (oldestId < this._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;' +
'        this._oldestId = Math.min(this._oldestId, oldestId);' +
'        this._newestId = Math.max(this._newestId, newestId);' +
'        var prev = null;' +
'        var itemVotes = p.user.voteCache.votes.items;' +
'        for (var i = 0; i < data.items.length; i++) {' +
'            var item = data.items[i];' +
'            item.thumb = CONFIG.PATH.THUMBS + item.thumb;' +
'            item.image = (cust0m.fullsize && item.fullsize) ? (CONFIG.PATH.FULLSIZE + item.fullsize) : (CONFIG.PATH.IMAGES + item.image);' +
'            item.fullsize = item.fullsize ? CONFIG.PATH.FULLSIZE + item.fullsize : null;' +
'            item.vote = itemVotes[item.id] || 0;' +
'            this.items[item.id] = item;' +
'        }' +
'        return position;' +
'    };';
s.parentNode.insertBefore(g, s);

standard =
{
    anzahl: 20,
    width: 0,
    pos: "ON",
    thumbs: 100,
    thumbs_min: 30,
    admin: "OFF",
    benis: "OFF",
    fullsize: "OFF"
};

function save_options()
{
    set = {
        anzahl: $('#cust0m_input_anzahl').text(),
        width: $('#cust0m_input_width').text(),
        pos: $('#cust0m_input_pos .active').text(),
        admin: $('#cust0m_input_admin .active').text(),
        thumbs: $('#cust0m_input_thumbs').text(),
        benis: $('#cust0m_input_benis .active').text(),
        fullsize: $('#cust0m_input_benis .active').text()
    };
    chrome.storage.local.set(set,
    function ()
    {
        var status = $('#cust0m_info');
        $('#cust0m_info').fadeIn();
        setTimeout(function ()
        {
            $('#cust0m_info').fadeOut();
        }, 500);
    });
}

function restore_options()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        $('#cust0m_input_anzahl').text(items.anzahl);

        $('#cust0m_input_width').text(items.width);

        $('#cust0m_input_pos .cust0m_trigger').removeClass("active");
        if(items.pos == "ON") $('#cust0m_input_pos .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_pos .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_admin .cust0m_trigger').removeClass("active");
        if(items.admin == "ON") $('#cust0m_input_admin .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_admin .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_benis .cust0m_trigger').removeClass("active");
        if(items.benis == "ON") $('#cust0m_input_benis .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_benis .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_fullsize .cust0m_trigger').removeClass("active");
        if(items.fullsize == "ON") $('#cust0m_input_fullsize .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_fullsize .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_thumbs').text(items.thumbs);
    });
}
restore_options();

$('#cust0m_save').click(save_options);
$('.cust0m_trigger').click(save_options);

$('#settings-link').mouseout(function () {$('.cust0m_settings').css('display', 'none');});
$('#settings-link').mouseover(function () {$('.cust0m_settings').css('display', 'block');});

$('.cust0m_input').keypress(function (event)
{
      if (event.keyCode == 10 || event.keyCode == 13) {
        save_options();
        event.preventDefault();
      }
});

function update_settings()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        anzahl = standard.anzahl;
        if(parseInt(items.anzahl) == items.anzahl) anzahl = parseInt(items.anzahl);

        width = standard.width;
        if(parseInt(items.width) == items.width) width = parseInt(items.width);

        thumbs = standard.thumbs;
        if(parseInt(items.thumbs) == items.thumbs)
        {
            thumbs = parseInt(items.thumbs);
            if(thumbs < standard.thumbs_min) thumbs = standard.thumbs_min;
        }
        thumbs /= 100;

        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.text = "p.user.admin = " + (items.admin == "ON") + ";" +
            "cust0m.fullsize = " + (items.fullsize == "ON") + ";" +
            "CONFIG.AUTO_SYNC.INTERVAL = " + "1" + "; CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = " + anzahl + "; CONFIG.LAYOUT.THUMB.WIDTH = " + (128 * thumbs) + "; CONFIG.LAYOUT.THUMB.HEIGHT = " + (128 * thumbs) + "; $(window).resize();";
        s.parentNode.insertBefore(g, s);

       changeCss('.item-image', 'min-height: ' + width + 'px;');

       changeCss('a.thumb, a.thumb img', 'height: ' + (128 * thumbs) + 'px; width: ' + (128 * thumbs) + 'px;');

        if(items.pos == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: auto; max-width: 1052px;');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: 0; max-width: 9999px');
            });
        }

        if(items.benis == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: inline');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: none');
            });
        }
        $(window).resize();
    });
}

chrome.storage.onChanged.addListener(function(changes, namespace)
{
    update_settings();
});

function changeCss(className, classValue)
{
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}

update_settings();
