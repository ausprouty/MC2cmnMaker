<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>婴孩耶稣（道成肉身）</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约1:1-2</span>)
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>太初有道，道与神同在，道就是神。<sup class="versenum">2&nbsp;</sup>这道太初与神同在。</p>
	</div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">我们惟有相信耶稣是基督，是神的儿子，才可以因祂的名得生命(<span class="popup-link" @click = "popUp('pop2')"> 约20:31</span>)。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>但记这些事要叫你们信耶稣是基督，是神的儿子，并且叫你们信了他，就可以因他的名得生命。</p>
	<!-- end bible --></div>
	除祂以外，别无拯救；因为天下人间，没有赐下别的名，我们可以靠着得救(<span class="popup-link" @click = "popUp('pop3')"> 徒4:12</span>)。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>除他以外，别无拯救，因为在天下人间，没有赐下别的名我们可以靠着得救。&rdquo;</p>
	<!-- end bible --></div>
	当我们接受基督时，生命就不再一样，因为 &ldquo;若有人在基督里，他就是新造的人，旧事已过，都变成新的了。&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 林后5:17</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>若有人在基督里，他就是新造的人，旧事已过，都变成新的了。</p>
	<!-- end bible --></div>
	愿人人都来认识这位复活的主，体验祂所赐丰盛的生命！</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">&ldquo;道&rdquo;早在整个宇宙开始以前就与上帝同在，宇宙万物是借着&ldquo;道&rdquo;造的，道自存的生命在创造万有的时候成为人的光；黑暗的世界却拒绝了生命的真光。施洗约翰是奉上帝差遣为这光做见证，这真光来到这世界要将生命的光带给世人，并应许凡接受这&ldquo;道&rdquo;的人就有权柄成为上帝的儿女。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span><span lang="ZH-CN">阅读或观看《</span></span></span></span>约翰福音1:14-18<span><span><span><span lang="ZH-CN">》两遍。</span></span></span></span></p>

<h2 class="up">&nbsp;</h2>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音1:14-18</button><div class="collapsed" id ="Text0">

<p><sup>14</sup> 道成了肉身，住在我们中间，充充满满地有恩典，有真理。我们也见过他的荣光，正是父独生子的荣光。<sup>15</sup>约翰为他作见证，喊着说：&ldquo;这就是我曾说：&lsquo;那在我以后来的，反成了在我以前的，因他本来在我以前。&rsquo;&rdquo;<sup>16</sup>从他丰满的恩典里，我们都领受了，而且恩上加恩。<sup>17</sup>律法本是借着摩西传的，恩典和真理都是由耶稣基督来的。<sup>18</sup>从来没有人看见　神，只有在父怀里的独生子将他表明出来。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/202.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音1:14-18&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">这位自存拥有完全神性的&ldquo;道&rdquo;竟然成为了一个真实的人，生活在一群人中间。从祂的言语和作为中，这群人看见了上帝充满恩典和真理的荣耀。这位神秘的&ldquo;道&rdquo;原来就是耶稣基督，祂是上帝独特的儿子，从来没有人见过上帝，只有耶稣将上帝完全的启示出来。耶稣离开天上的荣耀，降卑来到世上。&ldquo;道&rdquo;成为肉身，进入人类历史中，完全启示出上帝的恩典和荣耀（<span class="popup-link" @click = "popUp('pop6')"> 西1:15-20</span>；

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>爱子是那不能看见之神的像，是首生的，在一切被造的以先。<sup class="versenum">16&nbsp;</sup>因为万有都是靠他造的，无论是天上的、地上的，能看见的、不能看见的，或是有位的、主治的、执政的、掌权的，一概都是借着他造的，又是为他造的。<sup class="versenum">17&nbsp;</sup>他在万有之先，万有也靠他而立。<sup class="versenum">18&nbsp;</sup>他也是教会全体之首。他是元始，是从死里首先复生的，使他可以在凡事上居首位，<sup class="versenum">19&nbsp;</sup>因为父喜欢叫一切的丰盛在他里面居住。<sup class="versenum">20&nbsp;</sup>既然借着他在十字架上所流的血成就了和平，便借着他叫万有，无论是地上的、天上的，都与自己和好了。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> 来书2:17</span>）。<span class="popup-link" @click = "popUp('pop7')">  </span>

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>所以，他凡事该与他的弟兄相同，为要在神的事上成为慈悲忠信的大祭司，为百姓的罪献上挽回祭。</p>
	<!-- end bible --></div>
	圣经上说： &ldquo;他凡事该与他的弟兄相同&rdquo;。祂牺牲自己，成为和我们一样的人！ 造物者进入自己所创造的世界，因此，祂不单是我们的上帝，我们的大祭司，也是我们通往上帝的唯一道路。（<span class="popup-link" @click = "popUp('pop8')"> 约14:6</span>）

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>耶稣说：&ldquo;我就是道路、真理、生命。若不借着我，没有人能到父那里去。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">(进深学习：<span class="popup-link" @click = "popUp('pop9')"> 路加福音2:1-20</span>；
	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<h3>耶稣降生</h3>

	<p><sup class="versenum">1 </sup>当那些日子，恺撒<u class="person underline">奥古斯都</u>有旨意下来，叫天下人民都报名上册。<sup class="versenum">2&nbsp;</sup>这是<u class="person underline">居里扭</u>做叙利亚巡抚的时候，头一次行报名上册的事。<sup class="versenum">3&nbsp;</sup>众人各归各城，报名上册。<sup class="versenum">4&nbsp;</sup><u class="person underline">约瑟</u>也从加利利的拿撒勒城上犹太去，到了<u class="person underline">大卫</u>的城，名叫伯利恒，因他本是<u class="person underline">大卫</u>一族一家的人，<sup class="versenum">5&nbsp;</sup>要和他所聘之妻<u class="person underline">马利亚</u>一同报名上册。那时<u class="person underline">马利亚</u>的身孕已经重了。<sup class="versenum">6&nbsp;</sup>他们在那里的时候，<u class="person underline">马利亚</u>的产期到了，<sup class="versenum">7&nbsp;</sup>就生了头胎的儿子，用布包起来，放在马槽里，因为客店里没有地方。</p>

	<p><sup class="versenum">8&nbsp;</sup>在伯利恒之野地里有牧羊的人，夜间按着更次看守羊群。<sup class="versenum">9&nbsp;</sup>有主的使者站在他们旁边，主的荣光四面照着他们，牧羊的人就甚惧怕。<sup class="versenum">10&nbsp;</sup>那天使对他们说：&ldquo;不要惧怕，我报给你们大喜的信息，是关乎万民的。<sup class="versenum">11&nbsp;</sup>因今天在<u class="person underline">大卫</u>的城里，为你们生了救主，就是主基督。<sup class="versenum">12&nbsp;</sup>你们要看见一个婴孩，包着布，卧在马槽里，那就是记号了。&rdquo;<sup class="versenum">13&nbsp;</sup>忽然有一大队天兵，同那天使赞美神说：<sup class="versenum">14&nbsp;</sup>&ldquo;在至高之处荣耀归于神！在地上平安归于他所喜悦的人！&rdquo;</p>

	<p><sup class="versenum">15&nbsp;</sup>众天使离开他们升天去了，牧羊的人彼此说：&ldquo;我们往伯利恒去，看看所成的事，就是主所指示我们的。&rdquo;<sup class="versenum">16&nbsp;</sup>他们急忙去了，就寻见<u class="person underline">马利亚</u>和<u class="person underline">约瑟</u>，又有那婴孩卧在马槽里。<sup class="versenum">17&nbsp;</sup>既然看见，就把天使论这孩子的话传开了。<sup class="versenum">18&nbsp;</sup>凡听见的，就诧异牧羊之人对他们所说的话。<sup class="versenum">19&nbsp;</sup><u class="person underline">马利亚</u>却把这一切的事存在心里，反复思想。<sup class="versenum">20&nbsp;</sup>牧羊的人回去了，因所听见、所看见的一切事正如天使向他们所说的，就归荣耀于神，赞美他。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop10')">  马太福音1:18-25</span>)

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣基督降生的事记在下面：他母亲<u class="person underline">马利亚</u>已经许配了<u class="person underline">约瑟</u>，还没有迎娶，<u class="person underline">马利亚</u>就从圣灵怀了孕。<sup class="versenum">19&nbsp;</sup>她丈夫<u class="person underline">约瑟</u>是个义人，不愿意明明地羞辱她，想要暗暗地把她休了。<sup class="versenum">20&nbsp;</sup>正思念这事的时候，有主的使者向他梦中显现，说：&ldquo;<u class="person underline">大卫</u>的子孙<u class="person underline">约瑟</u>，不要怕，只管娶过你的妻子<u class="person underline">马利亚</u>来，因她所怀的孕是从圣灵来的。<sup class="versenum">21&nbsp;</sup>她将要生一个儿子，你要给他起名叫耶稣，因他要将自己的百姓从罪恶里救出来。&rdquo;<sup class="versenum">22&nbsp;</sup>这一切的事成就，是要应验主借先知所说的话说：<sup class="versenum">23&nbsp;</sup>&ldquo;必有童女怀孕生子，人要称他的名为<u class="person underline">以马内利</u>。&rdquo;（&ldquo;<u class="person underline">以马内利</u>&rdquo;翻出来就是&ldquo;神与我们同在&rdquo;。）<sup class="versenum">24&nbsp;</sup><u class="person underline">约瑟</u>醒了，起来，就遵着主使者的吩咐把妻子娶过来，<sup class="versenum">25&nbsp;</sup>只是没有和她同房，等她生了儿子，就给他起名叫耶稣。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>


<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约1:14</p>

<p class="forward bible">道成了肉身住在我们中间，充充满满的有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">现在让我们从<span class="popup-link" @click = "popUp('pop5')"> 约1:1-18</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>施洗约翰为真光作见证</h3>

	<p><sup class="versenum">1 </sup>太初有道，道与神同在，道就是神。<sup class="versenum">2&nbsp;</sup>这道太初与神同在。<sup class="versenum">3&nbsp;</sup>万物是借着他造的；凡被造的，没有一样不是借着他造的。<sup class="versenum">4&nbsp;</sup>生命在他里头，这生命就是人的光。<sup class="versenum">5&nbsp;</sup>光照在黑暗里，黑暗却不接受光。<sup class="versenum">6&nbsp;</sup>有一个人，是从神那里差来的，名叫<u class="person underline">约翰</u>。<sup class="versenum">7&nbsp;</sup>这人来，为要作见证，就是为光作见证，叫众人因他可以信。<sup class="versenum">8&nbsp;</sup>他不是那光，乃是要为光作见证。<sup class="versenum">9&nbsp;</sup>那光是真光，照亮一切生在世上的人。<sup class="versenum">10&nbsp;</sup>他在世界，世界也是借着他造的，世界却不认识他。<sup class="versenum">11&nbsp;</sup>他到自己的地方来，自己的人倒不接待他。<sup class="versenum">12&nbsp;</sup>凡接待他的，就是信他名的人，他就赐他们权柄做神的儿女。<sup class="versenum">13&nbsp;</sup>这等人不是从血气生的，不是从情欲生的，也不是从人意生的，乃是从神生的。<sup class="versenum">14&nbsp;</sup>道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。</p>

	<p><sup class="versenum">15&nbsp;</sup><u class="person underline">约翰</u>为他作见证，喊着说：&ldquo;这就是我曾说，&lsquo;那在我以后来的，反成了在我以前的，因他本来在我以前。&rsquo;&rdquo;<sup class="versenum">16&nbsp;</sup>从他丰满的恩典里，我们都领受了，而且恩上加恩。<sup class="versenum">17&nbsp;</sup>律法本是借着<u class="person underline">摩西</u>传的，恩典和真理都是由耶稣基督来的。<sup class="versenum">18&nbsp;</sup>从来没有人看见神，只有在父怀里的独生子将他表明出来。</p>
	<!-- end bible --></div>
	这段经文中找出所有关于&ldquo;道&rdquo;的叙述。有那些字是用来描述&ldquo;道&rdquo;的？这些字有什么特别的意义？</li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">这是一个与神为敌的世界，神却主动进入这世界，拯救祂所造的人。试想若&ldquo;道&rdquo;没有主动进入这世界，成为历史上的耶稣，我们世人将会如何？为什么？</span></span></span></span></li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在《信徒动员表》中写下一位弟兄/姐妹的名字，本周与他分享有关耶稣的故事。</li>
	<li class="forward">在《福音行动表》写下2-3位非信徒的名字，开始为他们的救恩祷告，求神柔软他们的心，开他们的心眼，愿意接受主耶稣&mdash;&mdash;世界和生命的真光。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p>亲爱的天父，感谢祢，耶稣基督道成肉身，住在我们当中，让我们借着祂可以认识祢，也借着耶稣而来的恩典取代了律法的恩典。求祢帮助我们继续在真道上真认识祢，在生活中天天经历祢丰盛的恩典，并为真理打美好的战。求主刚强我们的信心，让我们成为福音的出口，把福音传开，将人完完全全带到祢面前，奉主耶稣基督的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->