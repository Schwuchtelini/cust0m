/* Ich mach jetzt auch mal ein paar Kommentare */
/* Achja, diesen Code als Text zu programmieren macht alles einfacher, viel Übersichtlicher und richtig viel spaß*/

/* Für die Scrollbar*/
$("head").append('<link rel="stylesheet" type="text/css" href="http://rawgit.com/malihu/malihu-custom-scrollbar-plugin/master/jquery.mCustomScrollbar.min.css"><script type="text/javascript" src="http://rawgit.com/malihu/malihu-custom-scrollbar-plugin/master/jquery.mCustomScrollbar.concat.min.js"></script>');

/* Also hier sieht man das Menu das oben links raus poppt.*/
$(".user-info.user-only").prepend('<div class="cust0m_settings"><div class="cust0m_version">V2.0</div> \r\n' +
'    <div class="cust0m_menu_middle"> \r\n' +
'        <div class="cust0m_menu active" onclick="$(\'.cust0m_menu\').removeClass(\'active\'); $(this).addClass(\'active\'); $(\'.cust0m_posts\').css(\'display\',\'none\'); $(\'.cust0m_general\').css(\'display\',\'block\');">Allgemein</div> \r\n' +
'        <div class="cust0m_menu" onclick="$(\'.cust0m_menu\').removeClass(\'active\'); $(this).removeClass(\'active\'); $(this).addClass(\'active\'); $(\'.cust0m_posts\').css(\'display\',\'block\'); $(\'.cust0m_general\').css(\'display\',\'none\');">Posts</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie viele Vorschaubilder möchtest du pro Reihe maximal haben?<br>Normalerweise sind 8 eingetragen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Pro Reihe maximal:</div> \r\n' +
'        <div id="cust0m_input_anzahl" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Vorschaubilder</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie groß sollen die Vorschaubilder sein?<br>Normalerweise ist 100% eingetragen.<br>Limit: 30%</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Vorschaubilder Größe:</div> \r\n' +
'        <div id="cust0m_input_thumbs" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">%</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help ">Markiert die Bilder, die du schon gesehen hast.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Gesehene Bilder markieren:</div> \r\n' +
'        <div id="cust0m_input_save_views" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small active cust0m_trigger_m1" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">M 1</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_m2" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">M 2</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_m3" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">M 3</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_small cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_save_views_middle"> \r\n' +
'        <div class="cust0m_help">Wie Transparent soll die Markierung sein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Transparenz der Markierung</div> \r\n' +
'        <input id="cust0m_input_save_views_opacity" class="cust0m_slider" type="range" min="0" max="100" value="25" step="1" /> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Wie groß soll das Bild eines Betrags minimal sein?<br>Normalerweise ist 0 eingetragen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bilder Mindesthöhe:</div> \r\n' +
'        <div id="cust0m_input_width" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Soll für ein Beitrag das größere Bild geladen werden, wenn genügend Platz ist?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Großes Bild laden</div> \r\n' +
'        <div id="cust0m_input_fullsize" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Willst du Pr0gramm aus der Sicht eines Admins sehen?<br>Natürlich hast du damit keine Admin Rechte.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Admin Sicht:</div> \r\n' +
'        <div id="cust0m_input_admin" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Möchtest du oben im Header deinen Benis bestaunen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Benis anzeigen:</div> \r\n' +
'        <div id="cust0m_input_benis" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +

'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_benis_middle"> \r\n' +
'        <div class="cust0m_help">Soll dein Benis oben im Header relativ zu heute sein?<br>Wenn du diese Einstellung aktivierst wird angezeigt,<br> wie stark dein Benis seit jetzt gewachsen ist.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Relativer Benis:</div> \r\n' +
'        <div id="cust0m_input_benis_since" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +

'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Willst du die alten Pfeile wieder haben?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Die alten Pfeile anzeigen:</div> \r\n' +
'        <div id="cust0m_input_pfeil" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Möchtest du die Ups und Downs eines Posts direkt sehen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ups und Downs bei Posts:</div> \r\n' +
'        <div id="cust0m_input_ups_downs" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Möchtest du die Ups und Downs eines Kommentars direkt sehen können?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ups und Downs bei Kommentare:</div> \r\n' +
'        <div id="cust0m_input_ups_downs_comment" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Möchtest du den SFW / NSFW / NSFL Status eines Posts sehen?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">SFW / NSFW / NSFL anzeigen:</div> \r\n' +
'        <div id="cust0m_input_flag" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">So kannst du den OP besser erkennen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">OP markieren:</div> \r\n' +
'        <div id="cust0m_input_op" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Dadurch werden die Kommentare des OPs ganz oben angezeigt.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">OP nach oben:</div> \r\n' +
'        <div id="cust0m_input_op_top" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Sollen die Kommentare in die Mitte statt Links?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare in die Mitte:</div> \r\n' +
'        <div id="cust0m_input_pos" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Kommentarlinien helfen dir, bei vielen Kommentaren den Überblick zu behalten.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentarlinien anzeigen:</div> \r\n' +
'        <div id="cust0m_input_kommentarlinien" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_posts"> \r\n' +
'    <div class="cust0m_middle cust0m_kommentarlinien_middle"> \r\n' +
'        <div class="cust0m_help">Wie breit sollen die Kommentarlinien sein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentarelinienbreite:</div> \r\n' +
'        <div id="cust0m_input_kommentarlinienbreite" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Gibt dir die Möglichkeit Kommentare ein- und auszuklappen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ein- und ausklappbare Kommentare:</div> \r\n' +
'        <div id="cust0m_input_kommentarklappen" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_posts"> \r\n' +
'    <div class="cust0m_middle cust0m_kommentarklappen_middle"> \r\n' +
'        <div class="cust0m_help">Ab welcher Kommentartiefe willst du die Kommentare eingeklappt haben?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare ab einer Tiefe von</div> \r\n' +
'        <div id="cust0m_input_kommentarklappen_default" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Kommentaren einklappen</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_posts"> \r\n' +
'        <div class="cust0m_help">Wie viele Tags möchtest du am Anfang sehen?<br>Normalerweise werden 4 angezeigt.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Sichtbare Tags:</div> \r\n' +
'        <div id="cust0m_input_start_tags" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Tags</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Oben links erscheint eine Krone mit der du die Beiträge mit dem längsten Benis sehen kannst.<br>Leider braucht das je nach Einstellung ein bisschen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Best of:</div> \r\n' +
'        <div id="cust0m_input_best_of" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_best_of_middle"> \r\n' +
'        <div class="cust0m_help">Limit: 1500 Benis.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Best of mindest Benis:</div> \r\n' +
'        <div id="cust0m_input_best_of_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Oben links erscheint eine scheißender Bulle, mit dem du die Beiträge mit dem kürzesten Benis sehen kannst.<br>Leider braucht das je nach Einstellung ein bisschen.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bullshit:</div> \r\n' +
'        <div id="cust0m_input_bullshit" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_general"> \r\n' +
'    <div class="cust0m_middle cust0m_bullshit_middle"> \r\n' +
'        <div class="cust0m_help">Limit: -150 Benis.</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Für Bullshit höchst Benis:</div> \r\n' +
'        <div id="cust0m_input_bullshit_benis" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Benis</div> \r\n' +
'    </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Wie stell ich den Ton in Pr0gramm ein?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Ton:</div> \r\n' +
'        <div id="cust0m_input_ton" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle cust0m_general"> \r\n' +
'        <div class="cust0m_help">Willst du zukünftige Updates für cust0m pr0gramm erhalten?</div> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Updates:</div> \r\n' +
'        <div id="cust0m_input_no_updates" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div id="cust0m_save" class="cust0m_button">speichern</div> \r\n' +
'    <div id="cust0m_info" class="cust0m_button" style="display: none">gespeichert</div> \r\n' +
'</div>');

/* Weiter geht es mit dem Benis im Header*/
$("#user-profile-name").after('<div class="cust0m_benis_head">mm</div><div class="cust0m_benis_num"></div>');

/* und dann Kommen auch schon die "Best of" und "Bullshit" Buttons*/
$("#tab-stalk").after('<a id="tab-best_of" class="head-tab cust0m_best_of" onclick="cust0m.load_best_of();">mm </a><a id="tab-bullshit" class="head-tab cust0m_bullshit" onclick="cust0m.load_bullshit();">mm </a>');

/* Aktualisiert den Benis*/
if($("#user-profile-name").text() != "") setInterval(loadBenis, 30000);
function loadBenis()
{
    $.ajax(
    {
        url: "http://pr0gramm.com/api/profile/info?name=" + $("#user-profile-name").text() + "&flags=1&self=true",
        success: function(data)
        {
            $(".cust0m_benis_num").text(JSON.parse(data).user.score);
        }
    });
}
loadBenis();

/* Hier wird das script dass das Pr0gramm script ändert erstellt*/
var g = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
/* Zuerst definier ich ein paar Konstantenn die später noch mit den richtigen Werten gefüllt werden. Aber zuerst kommen default Werte rein.*/
g.text = 'cust0m = {};\r\n' +
'cust0m.fullsize = true;\r\n' +
'cust0m.best_of_benis = 500;\r\n' +
'cust0m.bullshit_benis = -200;\r\n' +
'cust0m.bullshit = false;\r\n' +
'cust0m.best_of = false;\r\n' +
'cust0m.disableLoad = true;\r\n' +
'cust0m.kommentarklappen_default = 3;\r\n' +
'cust0m.kommentarklappen = false;\r\n' +
'cust0m.op_top = false;\r\n' +
'cust0m.pfeile_weiter = true;\r\n' +
/* Das brauche ich um die Gesehenen Posts zu speichern. Die werden in dieses Div eingefügt und dann von dem anderen script ausgelesen. Ich kann nämlich nicht direkt methoden aus dem Pr0gramm script aufrufen*/
'$("body").append("<div style=\'display: none\' id=\'cust0m_viewed\'><div>");\r\n' +
/* Diese script sorgt dafür das die Einstellungen geladen werden*/
"cust0m.refresh = function() { if($('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.thumb').length > 0) $(window).resize(); else setTimeout(cust0m.refresh, 50)}\r\n" +
/* Sorgt für das ein und ausklappen von Kommentaren.*/
'cust0m.LoadEinklappen = function() ' +
'{\r\n' +
'    if($(".comment-foot").length >= 3) {\r\n' +
/* Zuerst wird die Tiefe für jedes Kommentar eingetragen und vorhandene Ein-ausklapptexte entfernt*/
'        $(".comment-foot").attr("tiefe", "0"); $(".comment-foot").each(function(index, elem) { if($(elem).parent().next().hasClass("comment-box")) { $(elem).parent().next().css("display","block"); $(elem).parent().next().find(".comment-foot").each(function(index, elem) { $(elem).attr("tiefe", (parseInt($(elem).attr("tiefe")) + 1) + ""); }); $(elem).find(".cust0m_comment").remove();}});\r\n' +
/* Dann werden die ein- und ausklapp mechanismen eingefügt und gegebenfalls einmal ausgeführt um die Kommentare einzuklappen*/
'        if(cust0m.kommentarklappen) $(".comment-foot").each(function(index, elem) { if($(elem).parent().next().hasClass("comment-box")) { if(parseInt($(elem).attr("tiefe")) == cust0m.kommentarklappen_default - 1) {$(elem).append("<a class=\'action cust0m_comment\' onclick=\'cust0m.commentClick($(this));\'><span class=\'pict\'>c</span> " + $(elem).parent().next().find(".comment").length + " rein</a>"); if(parseInt($(elem).attr("tiefe")) == cust0m.kommentarklappen_default - 1) cust0m.commentClick($(elem).find(".cust0m_comment"));}}});\r\n' +
/* Hier wird der OP markiert und nach oben verschoben sowie die Ups und downs der Kommentare eingefügt*/
'        var op = $(".item-details .user").text();\r\n' +
'        $(".comment-foot").each(function(index, elem) { {$(elem).append("<div class=\'cust0m_ups_downs_comment\'>" + $(elem).attr("title") + "<div>"); if($(elem).find(".user").text() == op) { $(elem).addClass("custom_op"); if(cust0m.op_top && (parseInt($(elem).attr("tiefe")) == 0)) { if($(elem).parent().next().hasClass("comment-box")) $(elem).parent().next().prependTo(".comments>.comment-box"); $(elem).parent().prependTo(".comments>.comment-box"); }} });\r\n' +
'   } else setTimeout(cust0m.LoadEinklappen, 50);\r\n' +
'};\r\n' +
/* Blendet die Kommentare eines Kommentars ein bzw. aus*/
'cust0m.commentClick = function (comment)\r\n' +
'{\r\n' +
'   box = comment.parent().parent().next();\r\n' +
'   if(box.hasClass("comment-box")) if(box.css("display") == "block") {box.css("display", "none"); comment.html("<span class=pict>c</span> " + box.find(".comment").length + " raus");} else {box.css("display", "block"); comment.html("<span class=pict>c</span> " + box.find(".comment").length + " rein");}\r\n' +
'};\r\n' +
/* Überschreibung einer orginal "Zeige den Folgenden Post" Methode*/
'p.View.Stream.Main.prototype.showItem = function ($item, scrollTo) {' +
"   if ($item.is(this.$currentItem)) {     var itemData;       this.hideItem();            this._wasHidden = true;            this.currentItemId = null;            return;        }        var $previousItem = this.$currentItem;        this.$currentItem = $item;        var $row = $item.parent();        var scrollTarget = 0;        if (scrollTo == this.SCROLL.FULL) {            scrollTarget = $row.offset().top - CONFIG.HEADER_HEIGHT + $item.height();        } else if (scrollTo == this.SCROLL.THUMB) {            scrollTarget = $row.offset().top - CONFIG.HEADER_HEIGHT - this.rowMargin;        } else {            scrollTarget = $(document).scrollTop();        }        var animate = !(scrollTo == this.SCROLL.FULL && this._scrolledToFullView);        this._scrolledToFullView = (scrollTo == this.SCROLL.FULL);        if (this.$itemContainer) {            var previousItemHeight = this.$itemContainer.find('.item-image').height() || 0;        }        if (!$row.next().hasClass('item-container')) {            if (this.$itemContainer) {                if (this.$itemContainer.offset().top < $item.offset().top) {                    scrollTarget -= this.$itemContainer.innerHeight() + this.rowMargin * 2;                }                if (animate) {                    this.$itemContainer.find('.gpt').remove();                    this.$itemContainer.slideUp('fast', function () {                        $(this).remove();                    });                } else {                    this.$itemContainer.remove();                }            }            this.$itemContainer = this.$itemContainerTemplate.clone(true);            this.$itemContainer.insertAfter($row);            if (animate && !this.jumpToItem) {                this.$itemContainer.slideDown('fast');            } else {                this.$itemContainer.show();            }        }        var id = $item[0].id.replace('item-', '');        itemData = this.stream.items[id];        var rowIndex = $item.prevAll().length;       if (this.currentItemSubview) {            this.currentItemSubview.remove();        }        this.currentItemSubview = new p.View.Stream.Item(this.$itemContainer, this);        this.currentItemSubview.show(rowIndex, itemData, previousItemHeight, this.jumpToComment);        this.jumpToComment = null;        this.prefetch($item);        if (!this.jumpToItem) {            if (animate) {                $('body, html').stop(true, true).animate({                    scrollTop: scrollTarget                }, 'fast');            } else {                $('body, html').stop(true, true).scrollTop(scrollTarget); } }this.currentItemId = id;" +
/* Nimmt die ups und downs eines Posts und fügt sie in eine extra Anzeige ein*/
'   text = $(".score").attr("title");\r\n' +
'   $(".item-info").append("<div class=\'cust0m_item_info\'>" + text + "</div>");\r\n' +
/* Nimmt die Flag (NSFL etc.) eines Posts und fügt sie in eine extra Anzeige ein*/
'   text = p.Stream.FLAG_NAME[itemData.flags];\r\n' +
'   $(".item-details").append("<span class=\'cust0m_flag flags flags-" + itemData.flags + "\'>" + text + "</span>");\r\n' +
/* Fügt bei Jedem Post die Pfeile hinzu*/
'   $(".stream-next").append("<span class=\'cust0m_stream-next-icon\'>&gt;</span>");\r\n' +
'   $(".stream-prev").append("<span class=\'cust0m_stream-prev-icon\'>&lt;</span>");\r\n' +
/* Ruft cust0m.LoadEinklappen auf, um die Kommentare einzuklappen*/
'   cust0m.LoadEinklappen();\r\n' +
'};\r\n' +
/* Aktiviert best of*/
'cust0m.load_best_of = function ()\r\n' +
'{\r\n' +
'   cust0m.disable_bullshit();\r\n' +
'   $(".cust0m_best_of").addClass("cust0m_active");\r\n' +
'   $("#tab-top").addClass("cust0m_unactive");\r\n' +
'   cust0m.best_of = true;\r\n' +
'   cust0m.disableLoad = false;\r\n' +
'   p.navigateTo("top",0);\r\n' +
'};\r\n' +
/* Aktiviert Bullshit*/
'cust0m.load_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = true;\r\n' +
'   cust0m.disable_best_of();\r\n' +
'   $(".cust0m_bullshit").addClass("cust0m_active");\r\n' +
'   $("#tab-new").addClass("cust0m_unactive");\r\n' +
'   cust0m.disableLoad = false;\r\n' +
'   p.navigateTo("new",0);\r\n' +
'};\r\n' +
/* Deaktiviert best of*/
'cust0m.disable_best_of = function ()\r\n' +
'{\r\n' +
'   cust0m.best_of = false;\r\n' +
'   $(".cust0m_best_of").removeClass("cust0m_active");\r\n' +
'   $("#tab-top").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
/* Deaktiviert Bullshit*/
'cust0m.disable_bullshit = function ()\r\n' +
'{\r\n' +
'   cust0m.bullshit = false;\r\n' +
'   $(".cust0m_bullshit").removeClass("cust0m_active");\r\n' +
'   $("#tab-new").removeClass("cust0m_unactive");\r\n' +
'};\r\n' +
/* Diese script sorgt dafür das Genügend Bilder geladen werden, in dem es ein event aufruft*/
"setTimeout(function() { setInterval(function() {if($(window).height() > $('body').height() - 400 && document.location.href != 'http://pr0gramm.com/tv' && $('.main-message').text().indexOf('Das Bild wurde als') == -1 && $('.main-message').text().indexOf('Nichts gefunden') == -1) {$(window).scroll(); console.log('cust0m Pr0gramm: scroll event');}}, 1500);}, 500);\r\n" +
/* Das Herz von "Best of" und "bullshit". Lädt solange Posts bis es 120 oder mehr hat.*/
'p.Stream.prototype._loadCust0m = function (options, callback, data, round) {\r\n' +
'        round++;\r\n' +
'        var stream = this;\r\n' +
'        options.flags = p.user.flags;\r\n' +
'        if(!(round > 20 && data.items.length <= 5)) p.api.get("items.get", p.merge(options, this.options), function (data2) {\r\n' +
'           stream.reached.start = data2.atStart || stream.reached.start;\r\n' +
'           stream.reached.end = data2.atEnd || stream.reached.end;\r\n' +
'           var oldestId = stream._oldestId; var newestId = stream._newestId;\r\n' +
'           if (stream.options.promoted && data2.items.length > 0) {\r\n' +
'               data2.items.sort(p.Stream.sortByPromoted);\r\n' +
'               oldestId = data2.items[data2.items.length - 1].promoted;\r\n' +
'               newestId = data2.items[0].promoted;\r\n' +
'           } else if(data2.items.length > 0) {\r\n' +
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
'           console.log("cust0m Pr0gramm: Lade Items. Bis jetzt: " + data.items.length + " in " + round +  " mit " + stream._oldestId);\r\n' +
'           //if((cust0m.bullshit || cust0m.best_of) && round > 50) $(".spinner").text((((data.items.length/120) * 100 + "").substr(0, 3) + "%"));\r\n' +
'           if((cust0m.bullshit || cust0m.best_of) && data.items.length < 120 && position == p.Stream.POSITION.PREPEND && !stream.reached.start) { console.log("cust0m Pr0gramm: Lade anfang"); stream._loadCust0m({newer: stream._newestId}, callback, data, round); }\r\n' +
'           else if((cust0m.bullshit || cust0m.best_of) && data.items.length < 120 && !stream.reached.end) { console.log("cust0m Pr0gramm: Lade end"); stream._loadCust0m({older: stream._oldestId}, callback, data, round); }\r\n' +
'           else \r\n' +
'           {\r\n' +
'               //if((cust0m.bullshit || cust0m.best_of) && round > 50) $(".spinner").html("<div class=\'bounce1\'></div><div class=\'bounce2\'></div><div class=\'bounce3\'></div>");\r\n' +
'               stream._oldestId = _oldestId;\r\n' +
'               stream._newestId = _newestId;\r\n' +
'               position = stream._processResponse(data);\r\n' +
'               if(position == p.Stream.POSITION.APPEND) console.log("cust0m Pr0gramm: Add to front");\r\n' +
'               if(position == p.Stream.POSITION.PREPEND) console.log("cust0m Pr0gramm: Add to Back");\r\n' +
'               callback(data.items, position, data.error);\r\n' +
'           }\r\n' +
'        });\r\n' +
'    };\r\n' +
/* hier überschreibe ich die load Matheode um "Best of" und "bullshit" möglich zu machen*/
'p.Stream.prototype._loadOrg = p.Stream.prototype._load; \r\n' +
'p.Stream.prototype._load = function (options, callback) {\r\n' +
'        if(cust0m.bullshit || cust0m.best_of) this._loadCust0m(options, callback, {items: []}, -1);\r\n' +
'        else this._loadOrg(options, callback);\r\n' +
'    };\r\n' +
/* Überschreibung der Vorschaubilder verarbeitungs methode*/
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
/* Und das alles nur um hier das Fullscreenbild einzufügen*/
'            item.image = (cust0m.fullsize && item.fullsize) ? (CONFIG.PATH.FULLSIZE + item.fullsize) : (CONFIG.PATH.IMAGES + item.image);\r\n' +
'            item.fullsize = item.fullsize ? CONFIG.PATH.FULLSIZE + item.fullsize : null;\r\n' +
'            item.vote = itemVotes[item.id] || 0;\r\n' +
'            this.items[item.id] = item;\r\n' +
'        }\r\n' +
'        return position;\r\n' +
'    }; \r\n' +
'\r\n' +
/*
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
*/
/* Überschreibung einer orginal "Gehe zu den Folgenden Post" Methode. Die regelt jetzt "Best of" und "bullshit" mit.*/
'p.navigateToOrginal = p.navigateTo;\r\n' +
'p.navigateTo = function (location, mode) {\r\n' +
'        var disable = false;\r\n' +
'        if(cust0m.bullshit && (location.indexOf("new") != 0 || (cust0m.disableLoad && location == "new" && mode == 0))) { cust0m.disable_bullshit(); disable = true;} \r\n' +
'        if(cust0m.best_of && (location.indexOf("top") != 0 || (cust0m.disableLoad && location == "top" && mode == 0))) { cust0m.disable_best_of(); disable = true;} \r\n' +
'        if((disable || cust0m.bullshit || cust0m.best_of) && (location == "top" || location == "new") && "http://pr0gramm.com/" + location == document.location.href)\r\n' +
'        {\r\n' +
'            p.navigateToOrginal(location == "top" ? "new" : "top", mode);\r\n' +
'            setTimeout(function() {p.navigateToOrginal(location, mode);}, 500);\r\n' +
'        }\r\n' +
'        else p.navigateToOrginal(location, mode);\r\n' +
'   cust0m.disableLoad = true;\r\n' +
/* Liest die ID des Aktuellen Post aus und gibt die Id den Angeschauten zähler (Wie gesagt ich kann nicht direkt methoden aufrufen)*/
'    if(location != "new" && location != "top"){ $("#cust0m_viewed").append("<div view=\'" + location.slice(-6) + "\'></div>"); $("#item-" + location.slice(-6)).addClass("custom_seen");}\r\n' +
'    },\r\n' +
/*"p.View.Stream.Main.prototype.buildItemOFF = function (item) { return (item != undefined) ? ('<a class=\"silent thumb\" id=\"item-' + item.id + '\" href=\"' + this.baseURL + item.id + '\">' + '<img src=\"' + item.thumb + '\"/>' + '</a>') : '';}" ;*/
/* Überschreibung der Pfeilbewegung um die Pfeile über das Bild hinaus zu bewegen*/
'p.View.Stream.Item.prototype.onScroll = function () {\r\n' +
'        if (!this.heightKnown) {\r\n' +
'            return;\r\n' +
'        }\r\n' +
'        var ih = cust0m.pfeile_weiter ? this.$container.height() - 96: this.$image.height();\r\n' +
'        var h = ih / 2 - 32;\r\n' +
'        var p = ($(window).scrollTop() - this.$container.offset().top).limit(32, ih - 32 - 96) + 96;\r\n' +
'        if (p == this.navTop) return;\r\n' +
'        this.navTop = p;\r\n' +
'        this.$streamPrev.css("padding-top", p);\r\n' +
'        this.$streamNext.css("padding-top", p);\r\n' +
'    };';
/* Fügt das Script letzten Endes ein*/
s.parentNode.insertBefore(g, s);

/* Hier definiere ich die Standards für die Einstellungen sowie max bzw. min*/
standard =
{
    anzahl: 20,
    anzahl_min: 3,
    anzahl_max: 9000,
    width: 0,
    width_min: 0,
    width_max: 2000,
    pos: "ON",
    thumbs: 100,
    thumbs_min: 30,
    thumbs_max: 500,
    admin: "OFF",
    benis: "ON",
    ups_downs: "ON",
    fullsize: "OFF",
    pfeil: "OFF",
    best_of: "ON",
    bullshit: "ON",
    best_of_benis: 500,
    best_of_benis_max: 1500,
    best_of_benis_min: -9000,
    bullshit_benis: -100,
    bullshit_benis_max: 9000,
    bullshit_benis_min: -150,
    ton: "OFF",
    kommentarlinien: "OFF",
    kommentarklappen: "OFF",
    kommentarklappen_default: 3,
    kommentarklappen_default_min: 1,
    kommentarklappen_default_max: 20,
    start_tags: 4,
    start_tags_min: 1,
    start_tags_max: 100,
    save_views: "OFF",
    no_updates: "ON",
    op: "ON",
    op_top: "ON",
    time: new Date().getTime(),
    viewed: {},
    kommentarlinienbreite: 1,
    kommentarlinienbreite_min: 1,
    save_views_opacity: 50,
    save_views_opacity_min: 1,
    save_views_opacity_max: 100,
    flag: "OFF",
    ups_downs_comment: "ON",
};

/* Speichert die angeschauten Posts*/
views = {};
/* Speichert die Einstellungen*/
function save_options()
{
    set = {
        anzahl: $('#cust0m_input_anzahl').text(),
        width: $('#cust0m_input_width').text(),
        start_tags: $('#cust0m_input_start_tags').text(),
        pos: $('#cust0m_input_pos .active').text(),
        admin: $('#cust0m_input_admin .active').text(),
        thumbs: $('#cust0m_input_thumbs').text(),
        benis: $('#cust0m_input_benis .active').text(),
        ups_downs: $('#cust0m_input_ups_downs .active').text(),
        kommentarlinien: $('#cust0m_input_kommentarlinien .active').text(),
        kommentarklappen: $('#cust0m_input_kommentarklappen .active').text(),
        kommentarklappen_default: $('#cust0m_input_kommentarklappen_default').text(),
        kommentarlinienbreite: $('#cust0m_input_kommentarlinienbreite').text(),
        fullsize: $('#cust0m_input_fullsize .active').text(),
        pfeil: $('#cust0m_input_pfeil .active').text(),
        best_of: $('#cust0m_input_best_of .active').text(),
        bullshit: $('#cust0m_input_bullshit .active').text(),
        no_updates: $('#cust0m_input_no_updates .active').text(),
        save_views: $('#cust0m_input_save_views .active').text(),
        op: $('#cust0m_input_op .active').text(),
        op_top: $('#cust0m_input_op_top .active').text(),
        ton: $('#cust0m_input_ton .active').text(),
        best_of_benis: $('#cust0m_input_best_of_benis').text(),
        bullshit_benis: $('#cust0m_input_bullshit_benis').text(),
        save_views_opacity: $('#cust0m_input_save_views_opacity').val(),
        ups_downs_comment: $('#cust0m_input_ups_downs_comment .active').text(),
        flag: $('#cust0m_input_flag .active').text()
    };
    for (var k in set)
    {
        if (standard[k + "_min"] != undefined)
        {
            if(parseInt(set[k]) == set[k]) set[k] = parseInt(set[k]);
            else set[k] = standard[k];
            set[k] = Math.max(standard[k + "_min"], Math.min(standard[k + "_max"], parseInt(set[k])));
        }
    }
    chrome.storage.local.set(set,
    function ()
    {
        var status = $('#cust0m_info');
        $('#cust0m_info').fadeIn();
        setTimeout(function ()
        {
            $('#cust0m_info').fadeOut();
        }, 500);
        restore_options();
        update_settings();
    });
}

/* Lädt die Einstellungen und stellt das Menu ein*/
function restore_options()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        $('#cust0m_input_anzahl').html(items.anzahl);

        $('#cust0m_input_width').html(items.width);

        $('#cust0m_input_start_tags').html(items.start_tags);

        var options = ["pos", "admin", "benis", "ups_downs", "fullsize", "kommentarlinien", "kommentarklappen", "pfeil", "ton", "bullshit", "best_of", "no_updates", "save_views", "op", "op_top", "flag", "ups_downs_comment"];

        for(i = 0; i < options.length; i++)
        {
            option = options[i];
            $('#cust0m_input_' + option + ' .cust0m_trigger').removeClass("active");
            if(items[option] == "ON") $('#cust0m_input_' + option + ' .cust0m_trigger_on').addClass("active");
            else if(items[option] == "M 1") $('#cust0m_input_' + option + ' .cust0m_trigger_m1').addClass("active");
            else if(items[option] == "M 2") $('#cust0m_input_' + option + ' .cust0m_trigger_m2').addClass("active");
            else if(items[option] == "M 3") $('#cust0m_input_' + option + ' .cust0m_trigger_m3').addClass("active");
            else $('#cust0m_input_' + option + ' .cust0m_trigger_off').addClass("active");
        }
        $('#cust0m_input_kommentarklappen_default').html(items.kommentarklappen_default);

        $('#cust0m_input_kommentarlinienbreite').html(items.kommentarlinienbreite);

        $('#cust0m_input_thumbs').html(items.thumbs);

        $('#cust0m_input_bullshit_benis').text(items.bullshit_benis);

        $('#cust0m_input_best_of_benis').text(items.best_of_benis);

        $('#save_views_opacity').val(items.save_views_opacity);
    });
}
restore_options();

/* Events zum speichern der Einstellungen*/
$('#cust0m_save').click(save_options);
$('.cust0m_trigger').click(save_options);
$('#cust0m_input_save_views_opacity').change(save_options);

$('#settings-link').mouseout(function () {$('.cust0m_settings').css('display', 'none');});
$('#settings-link').mouseover(function () {$('.cust0m_settings').css('display', 'block');});

$('.cust0m_input').keypress(function (event)
{
      if (event.keyCode == 10 || event.keyCode == 13) {
        save_options();
        event.preventDefault();
      }
});

/* Lädt die Einstellungen und stellt das Pr0gramm individuell ein*/
function update_settings()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        views = items;

        anzahl = items.anzahl;

        width = items.width;

        thumbs = items.thumbs / 100;

        best_of_benis = items.best_of_benis;

        bullshit_benis = items.bullshit_benis;

        /* fügt in das Pr0gramm script Atribute ein*/
        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.text = "p.user.admin = " + (items.admin == "ON") + ";" +
            "cust0m.fullsize = " + (items.fullsize == "ON") + ";" +
            "cust0m.kommentarklappen = " + (items.kommentarklappen == "ON") + ";" +
            "cust0m.kommentarklappen_default = " + items.kommentarklappen_default + ";" +
            "cust0m.op_top = " + (items.op_top == "ON") + ";" +
            "cust0m.best_of_benis = " + best_of_benis + ";" +
            "cust0m.bullshit_benis = " + bullshit_benis + ";" +
            "CONFIG.TAGS_MAX_DISPLAY = " + items.start_tags + ";" +
            "CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = " + anzahl + "; CONFIG.LAYOUT.THUMB.WIDTH = " + (128 * thumbs) + "; CONFIG.LAYOUT.THUMB.HEIGHT = " + (128 * thumbs) + "; cust0m.refresh(); cust0m.LoadEinklappen();";
        s.parentNode.insertBefore(g, s);

       /* Ich setzte jetzt die ganzen Eigenschaften*/

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

        if(items.op == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_op', 'border-color: #ee4d2e !important');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_op', '');
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

        if(items.ups_downs == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_item_info', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_item_info', 'display: none');
            });
        }

        if(items.pfeil == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.stream-prev-icon, .stream-next-icon', 'display: none !important');
                changeCss('.cust0m_stream-prev-icon, .cust0m_stream-next-icon', 'display: inline block !important');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.stream-prev-icon, .stream-next-icon', 'display: inline block !important');
                changeCss('.cust0m_stream-prev-icon, .cust0m_stream-next-icon', 'display: none !important');
            });
        }

        if(items.kommentarlinien == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.comment-box', 'border-left: ' + items.kommentarlinienbreite + 'px solid #222; margin-left: 5px;');
                changeCss('div.comment-box div.comment', 'margin-left: ' + (items.kommentarlinienbreite * 0.4 - 5) + 'px');
                changeCss('.comments>.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('.cust0m_kommentarlinien_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('div.comment-box div.comment', 'margin-left: 0px');
                changeCss('.comments>.comment-box', 'border-left: none; margin-left: 0px;');
                changeCss('.cust0m_kommentarlinien_middle', 'display: none');
            });
        }

        if(items.kommentarklappen == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_kommentarklappen_middle', 'display: block');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                 changeCss('.cust0m_kommentarklappen_middle', 'display: none');
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
        if(items.save_views == "OFF")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', '');
            });
        }
        else if(items.save_views == "M 1")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', 'opacity: ' + (1 - items.save_views_opacity / 100));
                changeCss('.custom_seen::after', '');
            });
        }
        else if(items.save_views == "M 2")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', 'background: rgba(137, 43, 43, ' + (items.save_views_opacity / 100) + ');    content: "";    width: 100%;    height: 100%;    margin: -150% 0 0 90%;    display: block;  transform: rotate(45deg);');
            });
        }
        else if(items.save_views == "M 3")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.custom_seen', '');
                changeCss('.custom_seen::after', 'content: "v";height: 20px;margin: -18px 0 0 -5px;padding-right: 3px;display: block;transform: rotate(0deg);color: #FFF;font-family: \'pict0gramm\';text-shadow: 0 0 1px #000, 0 0 2px #000;text-align: right;opacity: ' + (items.save_views_opacity / 100) + ';');
            });
        }

        if(items.flag == "ON" && items.admin == "OFF")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_flag', 'display: inline');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_flag', 'display: none');
            });
        }

        var future = 1000 * 60 * 60 * 24 * 365 * 100;
        if(items.no_updates == "OFF")
        {
            chrome.storage.local.set(
            {
                time: future
            });
        }
        else
        {
            if(items.time == future) chrome.storage.local.set(
            {
                time: new Date().getTime() - 1000 * 60 * 61
            }, update);
        }

        $(window).resize();
    });
}

/* Fügt custom CSS ein*/
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

/* Lädt die Einstellungen ins Pr0gramm*/
update_settings();

/* Setzt die schon gesehenen Posts*/
function setViews()
{
    if(views.save_views != "OFF" && (lastViewed == 0 || lastViewed != $(".custom_seen").length || lastThumbs != $(".thumb").length))
    {
        $("#cust0m_viewed div").each(function (id, elem) {if($(elem).attr("view") != undefined) {saveView("item-" + $(elem).attr("view"));}});
        $("#cust0m_viewed div").remove();
        lastViewed = $(".custom_seen").length;
        lastThumbs = $(".thumb").length;
        $(".thumb").not(".custom_checked").each(function (id, elem) {if(isView($(elem).attr("id"))) $(elem).addClass("custom_seen"); $(elem).addClass("custom_checked");});
        chrome.storage.local.set({viewed: views.viewed});
    }
}

lastThumbs = 0;
lastViewed = 0;
/* updatet die gesehenen Posts*/
setInterval(setViews, 1000);

function saveView(id)
{
    views.viewed[id] = true;
}

function isView(id)
{
   return views.viewed[id] === true;
}
