$(".user-info.user-only").prepend('<div class="cust0m_settings"> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Pro Reihe maximal:</div> \r\n' +
'        <div id="cust0m_input_anzahl" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Vorschaubilder</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Vorschaubilder Größe:</div> \r\n' +
'        <div id="cust0m_input_thumbs" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">%</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bilder Mindesthöhe:</div> \r\n' +
'        <div id="cust0m_input_width" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Großes Bild laden</div> \r\n' +
'        <div id="cust0m_input_fullsize" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare in die Mitte:</div> \r\n' +
'        <div id="cust0m_input_pos" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Admin Sicht:</div> \r\n' +
'        <div id="cust0m_input_admin" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Benis anzeigen:</div> \r\n' +
'        <div id="cust0m_input_benis" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Best of:</div> \r\n' +
'        <div id="cust0m_input_best_of" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_best_of_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Best of mindest Benis:</div> \r\n' +
'        <div id="cust0m_input_best_of_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bullshit:</div> \r\n' +
'        <div id="cust0m_input_bullshit" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_bullshit_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Bullshit höchst Benis:</div> \r\n' +
'        <div id="cust0m_input_bullshit_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div id="cust0m_save" class="cust0m_button">speichern</div> \r\n' +
'    <div id="cust0m_info" class="cust0m_button" style="display: none">gespeichert</div> \r\n' +
'</div> ');

$(".user-name.head-link").after('<div class="cust0m_benis_head">mm</div><div class="cust0m_benis_num"></div>');
$("#tab-top").after('<a id="tab-best_of" class="head-tab cust0m_best_of" onclick="cust0m.load_best_of();">mm </a><a id="tab-bullshit" class="head-tab cust0m_bullshit" onclick="cust0m.load_bullshit();">mm </a>');

if($(".user-name.head-link").text() != "") setInterval(loadBenis, 30000);

function loadBenis()
{
    $.ajax(
    {
        url: "http://pr0gramm.com/api/user/info?name=" + $(".user-name.head-link").text() + "&flags=1&self=true",
        success: function(data)
        {
            $(".cust0m_benis_num").text(JSON.parse(data).user.score);
        }
    });
}
loadBenis();

var g = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
g.text = 'cust0m = {};\r\n' +
'cust0m.fullsize = true;\r\n' +
'cust0m.best_of_benis = 500;\r\n' +
'cust0m.bullshit_benis = -200;\r\n' +
'cust0m.bullshit = false;\r\n' +
'cust0m.best_of = false;\r\n' +
'cust0m.free_click = false;\r\n' +
'cust0m.load_best_of = function ()\r\n' +
'{\r\n' +
'   debugger\r\n' +
'   cust0m.disable_bullshit();\r\n' +
'   $(".cust0m_best_of").addClass("cust0m_active");\r\n' +
'   $("#tab-top").addClass("cust0m_unactive");\r\n' +
'   cust0m.best_of = true;\r\n' +
'   cust0m.free_click = true;\r\n' +
'   p.navigateTo("top?",0);\r\n' +
'};\r\n' +
'cust0m.load_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = true;\r\n' +
'   cust0m.disable_best_of();\r\n' +
'   $(".cust0m_bullshit").addClass("cust0m_active");\r\n' +
'   $("#tab-new").addClass("cust0m_unactive");\r\n' +
'   cust0m.free_click = true;\r\n' +
'   p.navigateTo("new?",0);\r\n' +
'};\r\n' +
'cust0m.disable_best_of = function ()\r\n' +
'{\r\n' +
'   cust0m.best_of = false;\r\n' +
'   $(".cust0m_best_of").removeClass("cust0m_active");\r\n' +
'   $("#tab-top").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
'cust0m.disable_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = false;\r\n' +
'   $(".cust0m_bullshit").removeClass("cust0m_active");\r\n' +
'   $("#tab-new").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
"setInterval(function() {if($(window).height() > $('body').height() - 400) {$(window).scroll(); console.log('cust0m Pr0gramm: scroll event');}}, 1500);\r\n" +
'\r\n' +
'p.Stream.prototype._loadCust0m = function (options, callback, data) {\r\n' +
'        var stream = this;\r\n' +
'        console.log("cust0m Pr0gramm: Lade Items. Bis jetzt: " + data.items.length);\r\n' +
'        options.flags = p.user.flags;\r\n' +
'        p.api.get("items.get", p.merge(options, this.options), function (data2) {\r\n' +
'           stream.reached.start = data2.atStart || stream.reached.start;\r\n' +
'            stream.reached.end = data2.atEnd || stream.reached.end;\r\n' +
'           var oldestId, newestId;\r\n' +
'           if (stream.options.promoted) {\r\n' +
'               data2.items.sort(p.Stream.sortByPromoted);\r\n' +
'               oldestId = data2.items[data2.items.length - 1].promoted;\r\n' +
'               newestId = data2.items[0].promoted;\r\n' +
'           } else {\r\n' +
'               data2.items.sort(p.Stream.sortById);\r\n' +
'               oldestId = data2.items[data2.items.length - 1].id;\r\n' +
'               newestId = data2.items[0].id;\r\n' +
'           }\r\n' +
'           var position = (oldestId < stream._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;\r\n' +
'           _oldestId = stream._oldestId;\r\n' +
'           _newestId = stream._newestId;\r\n' +
'           stream._oldestId = Math.min(stream._oldestId, oldestId);\r\n' +
'           stream._newestId = Math.max(stream._newestId, newestId);\r\n' +
'           for (var i = 0; i < data2.items.length; i++) if ((!cust0m.best_of && !cust0m.bullshit) || (cust0m.best_of && data2.items[i].up - data2.items[i].down > cust0m.best_of_benis) || (cust0m.bullshit && data2.items[i].up - data2.items[i].down < cust0m.bullshit_benis)) data.items.push(data2.items[i]);\r\n' +
'           data2.items = data.items;\r\n' +
'           data = data2;\r\n' +
'           if(data.items.length < 120 && position == p.Stream.POSITION.APPEND && !stream.reached.end) { console.log("cust0m Pr0gramm: Lade end"); stream._loadCust0m({older: stream._oldestId}, callback, data); }\r\n' +
'           else if(data.items.length < 120 && !stream.reached.start) { console.log("cust0m Pr0gramm: Lade anfang"); stream._loadCust0m({newer: stream._newestId}, callback, data); }\r\n' +
'           else \r\n' +
'           {\r\n' +
'               stream._oldestId = _oldestId;\r\n' +
'               stream._newestId = _newestId;\r\n' +
'               position = stream._processResponse(data);\r\n' +
'               if(position == p.Stream.POSITION.APPEND) console.log("cust0m Pr0gramm: Add to front");\r\n' +
'               if(position == p.Stream.POSITION.PREPEND) console.log("cust0m Pr0gramm: Add to Back");\r\n' +
'               callback(data.items, position, data.error);\r\n' +
'           }\r\n' +
'        });\r\n' +
'    };\r\n' +
'p.Stream.prototype._load = function (options, callback) {\r\n' +
'        this._loadCust0m(options, callback, {items: []});\r\n' +
'    };\r\n' +
'p.Stream.prototype._processResponse = function (data) { \r\n' +
'        if (!data.items || !data.items.length) {\r\n' +
'            return null;\r\n' +
'        } \r\n' +
'        this.reached.start = data.atStart || this.reached.start;\r\n' +
'        this.reached.end = data.atEnd || this.reached.end;\r\n' +
'        var oldestId, newestId;\r\n' +
'        if (this.options.promoted) {\r\n' +
'            data.items.sort(p.Stream.sortByPromoted);\r\n' +
'            oldestId = data.items[data.items.length - 1].promoted;\r\n' +
'            newestId = data.items[0].promoted;\r\n' +
'        } else {\r\n' +
'            data.items.sort(p.Stream.sortById);\r\n' +
'            oldestId = data.items[data.items.length - 1].id;\r\n' +
'            newestId = data.items[0].id;\r\n' +
'        }\r\n' +
'        var position = (oldestId < this._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;\r\n' +
'        this._oldestId = Math.min(this._oldestId, oldestId);\r\n' +
'        this._newestId = Math.max(this._newestId, newestId);\r\n' +
'        var prev = null;\r\n' +
'        var itemVotes = p.user.voteCache.votes.items;\r\n' +
'        for (var i = 0; i < data.items.length; i++) {\r\n' +
'            var item = data.items[i];\r\n' +
'            item.thumb = CONFIG.PATH.THUMBS + item.thumb;\r\n' +
'            item.image = (cust0m.fullsize && item.fullsize) ? (CONFIG.PATH.FULLSIZE + item.fullsize) : (CONFIG.PATH.IMAGES + item.image);\r\n' +
'            item.fullsize = item.fullsize ? CONFIG.PATH.FULLSIZE + item.fullsize : null;\r\n' +
'            item.vote = itemVotes[item.id] || 0;\r\n' +
'            this.items[item.id] = item;\r\n' +
'        }\r\n' +
'        return position;\r\n' +
'    }; \r\n' +
'\r\n' +
'p.View.Stream.Main.prototype.loadedOFF = function (items, position, error) {\r\n' +
'        this.loadedBound = this.loaded.bind(this);\r\n' +
'        this.itemsPerRow = p.mainView.thumbsPerRow;\r\n' +
'        this.$container.find(".spinner").remove();\r\n' +
'        if (!items) {\r\n' +
'            var msg = null;\r\n' +
'            var fm = null;\r\n' +
'            if (error && (fm = error.match(/^(nsfw|nsfl|sfw)Required$/))) {\r\n' +
'               msg = "Das Bild wurde als <em>" + fm[1].toUpperCase() + "</em> markiert.<br/>" +\r\n' +
'                    (p.user.id ? "Ändere deine Filter-Einstellung," : "Melde dich an,") + " wenn du es sehen willst."\r\n' +
'            } else if (!this.hasItems) {\r\n' +
'                msg = "Nichts gefunden &#175;\\_(&#12484;)_/&#175;";\r\n' +
'            }\r\n' +
'            if (msg) {\r\n' +
'                this.$container.html("<h2 class=\'main-message\'>" + msg + "</h2>");\r\n' +
'            }\r\n' +
'            return;\r\n' +
'        }\r\n' +
'        if (position == p.Stream.POSITION.PREPEND && items.length > 0) {\r\n' +
'            var prevHeight = $("#main-view").height();\r\n' +
'            var firstRow = this.$streamContainer.find(".stream-row:first");\r\n' +
'            var placeholders = firstRow.find(".thumb-placeholder");\r\n' +
'            var numPlaceholders = placeholders.length\r\n' +
'            if (numPlaceholders) {\r\n' +
'                var html = "";\r\n' +
'               for (var i = 0; i < numPlaceholders; i++) {\r\n' +
'                   html += this.buildItem(items[items.length - numPlaceholders - 1 + i]);\r\n' +
'               }\r\n' +
'               placeholders.remove();\r\n' +
'               firstRow.prepend(this.prepareThumbsForInsertion(html));\r\n' +
'           }\r\n' +
'          var html = this.buildItemRows(items, 0, items.length - numPlaceholders, position);\r\n' +
'          this.$streamContainer.prepend(this.prepareThumbsForInsertion(html));\r\n' +
'          var newHeight = $("#main-view").height() - (117 - 52);\r\n' +
'          $(document).scrollTop($(document).scrollTop() + (newHeight - prevHeight));\r\n' +
'      } else if (position == p.Stream.POSITION.APPEND && items.length > 0) {\r\n' +
'          var lastRow = this.$streamContainer.find(".stream-row:last");\r\n' +
'          var itemCount = lastRow.find(".thumb").length;\r\n' +
'          var fill = 0;\r\n' +
'          if (itemCount % this.itemsPerRow != 0) {\r\n' +
'              var html = "";\r\n' +
'              fill = this.itemsPerRow - itemCount;\r\n' +
'              for (var i = 0; i < fill; i++) {\r\n' +
'                   html += this.buildItem(items[i]);\r\n' +
'              }\r\n' +
'              lastRow.append(this.prepareThumbsForInsertion(html));\r\n' +
'          }\r\n' +
'          if(items.length - fill > 0) { var html = this.buildItemRows(items, fill, items.length, position);\r\n' +
'          this.$streamContainer.append(this.prepareThumbsForInsertion(html));}\r\n' +
'      }\r\n' +
'      if (this.jumpToItem) {\r\n' +
'          var target = $("#item-" + this.jumpToItem);\r\n' +
'          if (target.length) {\r\n' +
'              $(document).scrollTop(target.offset().top - CONFIG.HEADER_HEIGHT);\r\n' +
'              this.showItem(target, this.SCROLL.THUMB);\r\n' +
'          }\r\n' +
'          this.jumpToItem = null;\r\n' +
'      }\r\n' +
'      this.loadInProgress = false;\r\n' +
'      this.hasItems = true;\r\n' +
'      if(items.length <= this.itemsPerRow * 3) $(window).resize();\r\n' +
'   };' +
'p.navigateToOrginal = p.navigateTo;\r\n' +
'p.navigateTo = function (location, mode) {\r\n' +
'        debugger;\r\n' +
'        if(cust0m.bullshit && location.indexOf("new") != 0) cust0m.disable_bullshit();\r\n' +
'        if(cust0m.best_of && location.indexOf("top") != 0) cust0m.disable_best_of();\r\n' +
'        this._navigateSilent = (mode == p.NAVIGATE.SILENT);\r\n' +
'        if (this._hasPushState) {\r\n' +
'            var url = "/" + location;\r\n' +
'            window.history.pushState({}, document.title, url);\r\n' +
'            this._dispatch(mode == p.NAVIGATE.FORCE);\r\n' +
'        } else {\r\n' +
'            var url = document.location.href.replace(/#.*$/, "") + "#" + location;\r\n' +
'            document.location.assign(url);\r\n' +
'        }\r\n' +
'        if (CONFIG.ANALYTICS.ENABLED && window._gaq) {\r\n' +
'           _gaq.push(["_trackPageview", location]);\r\n' +
'        }\r\n' +
'    },\r\n' +
"p.View.Stream.Main.prototype.buildItemOFF = function (item) { return (item != undefined) ? ('<a class=\"silent thumb\" id=\"item-' + item.id + '\" href=\"' + this.baseURL + item.id + '\">' + '<img src=\"' + item.thumb + '\"/>' + '</a>') : '';}" ;
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
    fullsize: "OFF",
    best_of: "ON",
    bullshit: "ON",
    best_of_benis: 500,
    best_of_benis_max: 1000,
    best_of_benis_min: -9000,
    bullshit_benis: -200,
    bullshit_benis_max: 9000,
    bullshit_benis_min: -1000
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
        fullsize: $('#cust0m_input_benis .active').text(),
        best_of: $('#cust0m_input_best_of .active').text(),
        bullshit: $('#cust0m_input_bullshit .active').text(),
        best_of_benis: $('#cust0m_input_best_of_benis').text(),
        bullshit_benis: $('#cust0m_input_bullshit_benis').text()
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

        $('#cust0m_input_bullshit .cust0m_trigger').removeClass("active");
        if(items.bullshit == "ON") $('#cust0m_input_bullshit .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_bullshit .cust0m_trigger_off').addClass("active");
        $('#cust0m_input_bullshit_benis').text(items.bullshit_benis);

        $('#cust0m_input_best_of .cust0m_trigger').removeClass("active");
        if(items.best_of == "ON") $('#cust0m_input_best_of .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_best_of .cust0m_trigger_off').addClass("active");
        $('#cust0m_input_best_of_benis').text(items.best_of_benis);
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

        best_of_benis = standard.best_of_benis;
        if(parseInt(items.best_of_benis) == items.best_of_benis) best_of_benis = Math.max(standard.best_of_benis_min, Math.min(standard.best_of_benis_max, parseInt(items.best_of_benis)));

        bullshit_benis = standard.bullshit_benis;
        if(parseInt(items.bullshit_benis) == items.bullshit_benis) bullshit_benis = Math.max(standard.bullshit_benis_min, Math.min(standard.bullshit_benis_max, parseInt(items.bullshit_benis)));

        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.text = "p.user.admin = " + (items.admin == "ON") + ";" +
            "cust0m.fullsize = " + (items.fullsize == "ON") + ";" +
            "cust0m.best_of_benis = " + best_of_benis + ";" +
            "cust0m.bullshit_benis = " + bullshit_benis + ";" +
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

        if(items.bullshit == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_bullshit', 'display: inline');
                changeCss('.cust0m_bullshit_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_bullshit', 'display: none');
                changeCss('.cust0m_bullshit_middle', 'display: none');
            });
        }

        if(items.best_of == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_best_of', 'display: inline');
                changeCss('.cust0m_best_of_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_best_of', 'display: none');
                 changeCss('.cust0m_best_of_middle', 'display: none');
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
