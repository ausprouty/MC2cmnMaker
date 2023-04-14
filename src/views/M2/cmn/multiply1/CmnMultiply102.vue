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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>关系与团契	</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课透过路加福音第15章中的&ldquo;浪子比喻&rdquo;帮助我们明白天父的慈爱，同时提醒我们，罪是不会改变上帝是我们天父的事实，但是罪却会带来严重的后果，也会影响我们和天父之间的交通（团契），使我们无法享受祂的慈爱。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇43:3-5</p>

<p class="back bible"><sup>3</sup>求你发出你的亮光和真实，好引导我，带我到你的圣山，到你的居所。<sup>4</sup>我就走到　神的祭坛，到我最喜乐的　神那里。神啊，我的　神！我要弹琴称赞你！<sup>5</sup>我的心哪，你为何忧闷？为何在我里面烦躁？应当仰望　神，因我还要称赞他。他是我脸上的光荣，是我的　神。</p>

</div>

<ul class="back">
	<li class="back">让我们以诗歌来感谢神的慈爱和信实，因祂是我们的神，是我们随时的帮助。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约10:29-30</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>我父把羊赐给我，他比万有都大，谁也不能从我父手里把他们夺去。</p>

	<p><sup class="versenum">30&nbsp;</sup>&ldquo;我与父原为一。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">当我们接受基督时，生命从此不再一样。<span class="popup-link" @click = "popUp('pop2')"> 哥林多后书5:17</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>若有人在基督里，他就是新造的人，旧事已过，都变成新的了。</p>
	<!-- end bible --></div>
	说：&ldquo;若有人在基督里，他就是新造的人，旧事已过，都变成新的了。&rdquo; 我们现在就是新造的人，当我们决定跟随基督时，并愿意让祂在我们生命中作改变的工作，我们就越能明白人生的目的和意义。在踏上新生命的旅程时，让我们一起用神的话语彼此勉励和扶持。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召&nbsp;</h2>

<ul>
	<li><strong><span><span><span lang="ZH-CN">故事背景</span></span></span></strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">一群在社会上被瞧不起的人回应耶稣的教导。宗教领袖（法利赛人）和宗教法条的教师们（文士）不喜欢耶稣与这群人在一起。因此，耶稣讲了浪子的比喻，说明上帝对罪人的心。</span></span></span></p>

<ul>
</ul>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音15:11-24》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音15:11-24</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">11&nbsp;</sup>耶稣又说：&ldquo;一个人有两个儿子。<sup class="versenum">12&nbsp;</sup>小儿子对父亲说：&lsquo;父亲，请你把我应得的家业分给我。&rsquo;他父亲就把产业分给他们。<sup class="versenum">13&nbsp;</sup>过了不多几日，小儿子就把他一切所有的都收拾起来，往远方去了。在那里任意放荡，浪费资财。<sup class="versenum">14&nbsp;</sup>既耗尽了一切所有的，又遇着那地方大遭饥荒，就穷苦起来。<sup class="versenum">15&nbsp;</sup>于是去投靠那地方的一个人，那人打发他到田里去放猪。<sup class="versenum">16&nbsp;</sup>他恨不得拿猪所吃的豆荚充饥，也没有人给他。<sup class="versenum">17&nbsp;</sup>他醒悟过来，就说：&lsquo;我父亲有多少的雇工，口粮有余，我倒在这里饿死吗？<sup class="versenum">18&nbsp;</sup>我要起来，到我父亲那里去，向他说：&ldquo;父亲，我得罪了天，又得罪了你。<sup class="versenum">19&nbsp;</sup>从今以后，我不配称为你的儿子，把我当做一个雇工吧！&rdquo;&rsquo;<sup class="versenum">20&nbsp;</sup>于是起来，往他父亲那里去。相离还远，他父亲看见，就动了慈心，跑去抱着他的颈项，连连与他亲嘴。<sup class="versenum">21&nbsp;</sup>儿子说：&lsquo;父亲，我得罪了天，又得罪了你。从今以后，我不配称为你的儿子。&rsquo;<sup class="versenum">22&nbsp;</sup>父亲却吩咐仆人说：&lsquo;把那上好的袍子快拿出来给他穿，把戒指戴在他指头上，把鞋穿在他脚上，<sup class="versenum">23&nbsp;</sup>把那肥牛犊牵来宰了，我们可以吃喝快乐！<sup class="versenum">24&nbsp;</sup>因为我这个儿子是死而复活，失而又得的。&rsquo;他们就快乐起来。</p>
<!-- end bible -->

<p></p>

</div>


<button id="MC2/cmn/video/multiply1/102.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音15:11-24&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对耶稣有什么新的认识？</li>
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
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">天父愿意赦免祂儿女的罪。罪不会改变我们是天父儿女的事实，但它会影响我们与上帝之间的交通。当我们犯罪得罪神，我们可以马上来到天父的面前承认，感谢耶稣为我们的罪所作的赦免，并靠着耶稣活出天父为我们所预备的生命</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">路加福音15:24</p>

<p class="forward bible">因为我这个儿子，是死而复活，失而又得的。他们就快乐起来。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward"><strong>体验在神的慈爱和赦免中成长</strong></p>

<p class="flush">约翰一书1:9</p>

<p class="flush">&ldquo;我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。&rdquo;</p>

<ul class="forward">
	<li class="forward"><strong>认罪是什么</strong></li>
</ul>

<p class="indent2">1. 同意神对我们的罪的看法。</p>

<p class="indent2">2. 感谢神的赦免。神是信实的，是公义的，必要赦免我们的罪。</p>

<p class="indent2">3. 悔改，改变对罪的看法。靠着圣灵的大能，带来态度和行为的改变。</p>

<ul class="forward">
	<li class="indent"><strong>为什么我们要认罪</strong></li>
	<li class="indent3">认罪是信心的表现。</li>
	<li class="indent3">认罪是我们对神的爱之回应。（<span class="popup-link" @click = "popUp('pop3')"> 约翰一书4:9-10</span>,
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>神差他独生子到世间来，使我们借着他得生，神爱我们的心在此就显明了。<sup class="versenum">10&nbsp;</sup>不是我们爱神，乃是神爱我们，差他的儿子为我们的罪做了挽回祭，这就是爱了。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 约翰一书4:19</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>我们爱，因为神先爱我们。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">认罪使我们继续与神相交。（<span class="popup-link" @click = "popUp('pop5')"> 约翰一书1:6-7</span>）
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>我们若说是与神相交，却仍在黑暗里行，就是说谎话，不行真理了。<sup class="versenum">7&nbsp;</sup>我们若在光明中行，如同神在光明中，就彼此相交，他儿子耶稣的血也洗净我们一切的罪。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent"><strong>认罪的操练</strong></li>
</ul>

<ol>
	<li class="indent2">祈求圣灵向你显明在你生命中的罪，然后写在纸上，向神认罪之后，再把它撕毁（当你认罪之后，心中若还有犯罪感，那绝不是从神而来的，而是从撒但来的，因为罗马书8:1 &ldquo;如今，那些在基督耶稣里的就不定罪了。&rdquo; ）</li>
	<li class="indent2">凭信心感谢神，因为在基督里你已经完全被赦免了。</li>
	<li class="indent2">求神帮助你改变对罪的看法，态度和行为有改变。</li>
</ol>

<ul class="forward">
	<li class="forward">问题与讨论</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在未来一周，每天都操练一次用纸写下和撕掉的认罪。</li>
	<li class="nobreak-final-final">（用一张字，将罪写下，认罪了之后就把纸撕掉。这个更好帮助我们省察自己得罪神的地方、体验罪被赦免及我们得洗净的事实（<span class="popup-link" @click = "popUp('pop6')"> 约翰一书1:9</span>）。
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。</p>
	<!-- end bible --></div>
	当我们以后在生活中意识到自己犯罪，或是熟练了以后，我们就可以不用纸，自己在祷告中认真的承认、感谢和悔改就可以了。）</li>
	<li class="forward">接下来弃绝一项神所不喜悦的行为/习惯（例如：撒谎、冷漠、未婚同居、婚外情、欺诈等）。若有需要，可与组长分享，彼此督责劝勉，并靠着圣灵的大能，做神所喜悦的事。</li>
	<li class="forward">若有人问你行为/习惯改变的原因，请告诉他们你已跟随耶稣的决定。</li>
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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p><span><span><span><strong><span><span>福音祷告</span></span></strong></span></span></span></p>

<p style="text-align:justify"><span><span><span lang="ZH-CN">亲爱的天父，感谢</span><span lang="ZH-CN">祢</span><span lang="ZH-CN">借着耶稣舍命的救恩，使我们可以经历新的生命。谢谢祢对我们不离不弃的爱，祢一直用祢无条件的爱来呼唤及等待我们回到祢的怀抱中。求</span><span lang="ZH-CN">天父</span><span lang="ZH-CN">赐我们信心和勇气，天天为</span><span lang="ZH-CN">祢</span><span lang="ZH-CN">而活，我们承认在生命中还有很多不讨</span><span lang="ZH-CN">祢</span><span lang="ZH-CN">喜悦和得罪</span><span lang="ZH-CN">祢</span><span lang="ZH-CN">的态度和生活习惯，求圣灵赐我们能力去胜过和改变，时刻经历</span><span lang="ZH-CN">天父</span><span lang="ZH-CN">的慈爱和赦免，真实体验和得着平安与喜乐，过讨</span><span lang="ZH-CN">祢喜悦的生活</span><span lang="ZH-CN">。奉主耶稣基督的名求，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->