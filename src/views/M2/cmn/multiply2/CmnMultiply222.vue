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
                        <div class="chapter_number ltr"><h1>22.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动五</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路5:13</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>耶稣伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;大麻风立刻就离了他的身。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>当那位麻疯病人来到耶稣跟前求洁净，耶稣就伸手摸他，医治他的心灵，可能他也已经许久没有人敢碰触他了。耶稣如此的举动，显示他对人包容的爱与全然的赦免。罪使人与神隔绝，让人逃离神的面，甚至不敢来到主跟前。但在神没有任何一项罪大到祂不能赦免和医治。因为主耶稣来，为要拯救失丧的人，让我们坦然无惧来到这位施恩和医治的神面前，为要得祂的怜恤，作随时的帮助。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">主耶稣暂时离开，完成在加利利巡回传道以后（<span class="popup-link" @click = "popUp('pop2')"> 可1:38-39</span>），
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup class="versenum">39&nbsp;</sup>于是在加利利全地，进了会堂，传道、赶鬼。</p>
	<!-- end bible --></div>
	又回到迦百农。这次许多人聚集，而且挤得水泄不通。他们不仅是为了医病赶鬼，也是为了要听神的道，而有四个人抬着一个瘫子要来见耶稣。古代犹太人的房子大都是为平顶，人可以从房外的石阶拾级而上。房顶通常是用树枝编成的席子横排在木梁上，在其上铺一层很厚的黏土，用石轮压过。这种房顶易于拆开。</li>
	<li class="nobreak-final-final">主的能力与耶稣同在，使他能医治病人。法利赛人和教法师在一旁窥探，要找耶稣的把柄。瘫子的朋友们拆了屋顶，把瘫子垂到耶稣面前，要得耶稣的医治。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音5:17-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音5:17-26</button><div class="collapsed" id ="Text0">

<p><sup>22</sup>有一天，耶稣教训人，有法利赛人和教法师在旁边坐着，他们是从加利利各乡村和犹太并耶路撒冷来的。主的能力与耶稣同在，使他能医治病人。<sup>18</sup>有人用褥子抬着一个瘫子，要抬进去放在耶稣面前，<sup>19</sup>却因人多，寻不出法子抬进去，就上了房顶，从瓦间把他连褥子缒到当中，正在耶稣面前。<sup>20</sup>耶稣见他们的信心，就对瘫子说：&ldquo;你的罪赦了。&rdquo; <sup>21</sup>文士和法利赛人就议论说：&ldquo;这说僭妄话的是谁？除了　神以外，谁能赦罪呢？&rdquo;<sup>22</sup>耶稣知道他们所议论的，就说：&ldquo;你们心里议论的是什么呢？<sup>23</sup>或说&lsquo;你的罪赦了&rsquo;，或说&lsquo;你起来行走&rsquo;，哪一样容易呢？<sup>24</sup>但要叫你们知道，人子在地上有赦罪的权柄。&rdquo;就对瘫子说：&ldquo;我吩咐你起来，拿你的褥子回家去吧！&rdquo;<sup>25</sup>那人当众人面前立刻起来，拿着他所躺卧的褥子回家去，归荣耀与神。<sup>26</sup>众人都惊奇，也归荣耀与　神，并且满心惧怕，说：&ldquo;我们今日看见非常的事了。&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/222.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音5:17-26&nbsp;</button>
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
<div id="Summary0" class="summary"><h2 class="up"><strong>+ 小结</strong></h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣的事工不断扩展。群众从各处聚集来听道，并且病得医治。那麻疯病得了医治的人带来从加利利各乡村和犹太并耶路撒冷来的法利赛人和教法师。他们聚集要知道这个能医治大麻疯的人是谁。 这次，耶稣藉着圣灵的能力医治许多人。有四个人从屋顶从瓦间把他们的瘫子朋友连褥子缒到耶稣面前。耶稣就趁这次机会向这群宗教领袖证明自己真正的身份。耶稣赦免这人的罪，证明自己与神同等。众人看见瘫子得医治，都归荣耀给天父。</p>

<ul>
	<li class="nobreak-final-final">(进深学习：<span class="popup-link" @click = "popUp('pop3')"> 马太福音9:1-8</span>；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣上了船，渡过海，来到自己的城里。<sup class="versenum">2&nbsp;</sup>有人用褥子抬着一个瘫子到耶稣跟前来。耶稣见他们的信心，就对瘫子说：&ldquo;小子，放心吧，你的罪赦了！&rdquo;<sup class="versenum">3&nbsp;</sup>有几个文士心里说：&ldquo;这个人说僭妄的话了！&rdquo;<sup class="versenum">4&nbsp;</sup>耶稣知道他们的心意，就说：&ldquo;你们为什么心里怀着恶念呢？<sup class="versenum">5&nbsp;</sup>或说&lsquo;你的罪赦了&rsquo;，或说&lsquo;你起来行走&rsquo;，哪一样容易呢？<sup class="versenum">6&nbsp;</sup>但要叫你们知道，人子在地上有赦罪的权柄。&rdquo;就对瘫子说：&ldquo;起来，拿你的褥子回家去吧！&rdquo;<sup class="versenum">7&nbsp;</sup>那人就起来，回家去了。<sup class="versenum">8&nbsp;</sup>众人看见都惊奇，就归荣耀于神，因为他将这样的权柄赐给人。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 马可福音2:1-13</span>)

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>医治瘫子</h3>

	<p><sup class="versenum">1 </sup>过了些日子，耶稣又进了迦百农。人听见他在房子里，<sup class="versenum">2&nbsp;</sup>就有许多人聚集，甚至连门前都没有空地。耶稣就对他们讲道。<sup class="versenum">3&nbsp;</sup>有人带着一个瘫子来见耶稣，是用四个人抬来的。<sup class="versenum">4&nbsp;</sup>因为人多，不得近前，就把耶稣所在的房子拆了房顶。既拆通了，就把瘫子连所躺卧的褥子都缒下来。<sup class="versenum">5&nbsp;</sup>耶稣见他们的信心，就对瘫子说：&ldquo;小子，你的罪赦了！&rdquo;<sup class="versenum">6&nbsp;</sup>有几个文士坐在那里，心里议论说：<sup class="versenum">7&nbsp;</sup>&ldquo;这个人为什么这样说呢？他说僭妄的话了！除了神以外，谁能赦罪呢？&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣心中知道他们心里这样议论，就说：&ldquo;你们心里为什么这样议论呢？<sup class="versenum">9&nbsp;</sup>或对瘫子说&lsquo;你的罪赦了&rsquo;，或说&lsquo;起来，拿你的褥子行走&rsquo;，哪一样容易呢？<sup class="versenum">10&nbsp;</sup>但要叫你们知道，人子在地上有赦罪的权柄。&rdquo;就对瘫子说：<sup class="versenum">11&nbsp;</sup>&ldquo;我吩咐你，起来，拿你的褥子回家去吧！&rdquo;<sup class="versenum">12&nbsp;</sup>那人就起来，立刻拿着褥子，当众人面前出去了。以致众人都惊奇，归荣耀于神，说：&ldquo;我们从来没有见过这样的事！&rdquo;</p>

	<p><sup class="versenum">13&nbsp;</sup>耶稣又出到海边去，众人都就了他来，他便教训他们。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路5:20</p>

<p class="forward bible">耶稣见他们的信心，就对瘫子说：&ldquo;你的罪赦了。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们生命中有没有什么瘫痪的地方，需要神的赦免及医治？你是否有属灵的同伴帮助你在属灵生命上成长？为什么？</li>
	<li class="forward">耶稣看见抬瘫子的朋友们的信心，就对瘫子说：&ldquo;你的罪赦了。&rdquo; 这件事情如何激励我们祷告？我们是否愿意将不信主的朋友或者亲人在祷告中抬到耶稣跟前，请求耶稣怜悯他们、拯救他们？</li>
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
	<li class="forward">小组举办&ldquo;福音性聚会&rdquo;就像把亲友带到神的面前，让他们也可以认识并经历主耶稣的真实与医治。你<span lang="ZH-CN"><span>继续为那些已经要邀请来参加福音性聚会的人祷告，求主让他们经历生命被反转和更新。</span></span></li>
	<li class="forward">定期与你的属灵同伴见面，分享，并彼此勉励行善。也求神为你预备初信者，你也可以花时间造就和陪伴他们，帮助他们属灵生命成长和成为主门徒。</li>
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

<p>爱我的主耶稣，感谢赞美祢，世人算什么，祢竟眷顾他。我们本是微不足道，甚至公然反对祢，不信祢。感谢祢没有放弃我们，谢谢祢借着身边的亲友及教会的弟兄姐妹把福音传给我，让我能认识祢这位独一的救主。谢谢祢在我生命中放下不同的人，陪伴我，帮助我属灵生命成长。主啊，我也愿意成为别人生命的祝福，带领他们来认识祢，帮助他们在祢的话语上成长，并成为他们跟随祢的榜样。求主不断更新和建造我的生命，使我讨祢的喜悦。感恩祷告奉主耶稣的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->