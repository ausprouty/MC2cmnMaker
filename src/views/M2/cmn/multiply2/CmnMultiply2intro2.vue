<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
<h1>阶段二 事工基础</h1>
<div id="showVideoOptions"></div>
  <p style="text-align:justify">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P2.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P2.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply2/M2P2.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify">&nbsp;</p>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span lang="ZH-CN">这段时间始于公元</span><span lang="EN-US">26</span><span lang="ZH-CN">年中期，当时耶稣大约</span><span lang="EN-US">30</span><span lang="ZH-CN">岁，并持续了</span><span lang="EN-US">18-21</span><span lang="ZH-CN">个月。 耶稣从受洗，到开始公开传道、到首度接触群众（<span class="popup-link" @click = "popUp('pop1')"> 约 1:35-44</span><span lang="ZH-CN">）</span> </span>

	<div class="popup invisible" id="pop1"><span lang="ZH-CN"><!-- begin bible --> </span>

	<h3><span lang="ZH-CN">约翰的两个门徒跟从耶稣</span></h3>

	<p><span lang="ZH-CN"><sup class="versenum">35&nbsp;</sup>再次日，<u class="person underline">约翰</u>同两个门徒站在那里。<sup class="versenum">36&nbsp;</sup>他见耶稣行走，就说：&ldquo;看哪，这是神的羔羊！&rdquo;<sup class="versenum">37&nbsp;</sup>两个门徒听见他的话，就跟从了耶稣。<sup class="versenum">38&nbsp;</sup>耶稣转过身来，看见他们跟着，就问他们说：&ldquo;你们要什么？&rdquo;他们说：&ldquo;拉比，在哪里住？&rdquo;（&ldquo;拉比&rdquo;翻出来就是&ldquo;夫子&rdquo;。）<sup class="versenum">39&nbsp;</sup>耶稣说：&ldquo;你们来看。&rdquo;他们就去看他在哪里住，这一天便与他同住。那时约有申正了。<sup class="versenum">40&nbsp;</sup>听见<u class="person underline">约翰</u>的话跟从耶稣的那两个人，一个是<u class="person underline">西门</u><u class="person underline">彼得</u>的兄弟<u class="person underline">安得烈</u>。<sup class="versenum">41&nbsp;</sup>他先找着自己的哥哥<u class="person underline">西门</u>，对他说：&ldquo;我们遇见弥赛亚了！&rdquo;（&ldquo;弥赛亚&rdquo;翻出来就是&ldquo;基督&rdquo;。）<sup class="versenum">42&nbsp;</sup>于是领他去见耶稣。耶稣看着他说：&ldquo;你是<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你要称为<u class="person underline">矶法</u>。&rdquo;（&ldquo;<u class="person underline">矶法</u>&rdquo;翻出来就是&ldquo;<u class="person underline">彼得</u>&rdquo;。）</span></p>
	<span lang="ZH-CN"> </span>

	<p><span lang="ZH-CN"><sup class="versenum">43&nbsp;</sup>又次日，耶稣想要往加利利去，遇见<u class="person underline">腓力</u>，就对他说：&ldquo;来跟从我吧！&rdquo;<sup class="versenum">44&nbsp;</sup>这<u class="person underline">腓力</u>是伯赛大人，和<u class="person underline">安得烈</u>、<u class="person underline">彼得</u>同城。 </span></p>
	<span lang="ZH-CN"> <!-- end bible --> </span></div>
	<span lang="ZH-CN"><span lang="ZH-CN">逐渐增加，并寻找祂第一批跟随者和那些想更认识祂的群众（<span class="popup-link" @click = "popUp('pop2')"> 约 4:1-4</span>）， </span></span>

	<div class="popup invisible" id="pop2"><span lang="ZH-CN"><span lang="ZH-CN"><!-- begin bible --> </span></span>

	<p><span lang="ZH-CN"><span lang="ZH-CN"><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。<sup class="versenum">4&nbsp;</sup>必须经过撒马利亚， </span></span></p>
	<span lang="ZH-CN"><span lang="ZH-CN"> <!-- end bible --> </span></span></div>
	<span lang="ZH-CN"><span lang="ZH-CN">以祂在拿撒勒被家乡的人拒绝为结束（<span class="popup-link" @click = "popUp('pop3')"> 路 4:16-31</span>）。 </span></span>

	<div class="popup invisible" id="pop3"><span lang="ZH-CN"><span lang="ZH-CN"><!-- begin bible --> </span></span>

	<h3><span lang="ZH-CN"><span lang="ZH-CN">耶稣在拿撒勒传道</span></span></h3>

	<p><span lang="ZH-CN"><span lang="ZH-CN"><sup class="versenum">16&nbsp;</sup>耶稣来到拿撒勒，就是他长大的地方，在安息日，照他平常的规矩进了会堂，站起来要念圣经。<sup class="versenum">17&nbsp;</sup>有人把先知<u class="person underline">以赛亚</u>的书交给他，他就打开，找到一处写着说：<sup class="versenum">18&nbsp;</sup>&ldquo;主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人，差遣我报告被掳的得释放、瞎眼的得看见，叫那受压制的得自由，<sup class="versenum">19&nbsp;</sup>报告神悦纳人的禧年。&rdquo;<sup class="versenum">20&nbsp;</sup>于是把书卷起来，交还执事，就坐下。会堂里的人都定睛看他。<sup class="versenum">21&nbsp;</sup>耶稣对他们说：&ldquo;今天这经应验在你们耳中了。&rdquo;<sup class="versenum">22&nbsp;</sup>众人都称赞他，并稀奇他口中所出的恩言，又说：&ldquo;这不是<u class="person underline">约瑟</u>的儿子吗？&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣对他们说：&ldquo;你们必引这俗语向我说：&lsquo;医生，你医治自己吧！我们听见你在迦百农所行的事，也当行在你自己家乡里！&rsquo;&rdquo;<sup class="versenum">24&nbsp;</sup>又说：&ldquo;我实在告诉你们：没有先知在自己家乡被人悦纳的。</span></span></p>
	<span lang="ZH-CN"><span lang="ZH-CN"> </span></span>

	<h3><span lang="ZH-CN"><span lang="ZH-CN">被撵出城</span></span></h3>

	<p><span lang="ZH-CN"><span lang="ZH-CN"><sup class="versenum">25&nbsp;</sup>&ldquo;我对你们说实话，当<u class="person underline">以利亚</u>的时候，天闭塞了三年零六个月，遍地有大饥荒，那时以色列中有许多寡妇，<sup class="versenum">26&nbsp;</sup><u class="person underline">以利亚</u>并没有奉差往她们一个人那里去，只奉差往西顿的撒勒法一个寡妇那里去。<sup class="versenum">27&nbsp;</sup>先知<u class="person underline">以利沙</u>的时候，以色列中有许多长大麻风的，但内中除了叙利亚国的<u class="person underline">乃缦</u>，没有一个得洁净的。&rdquo;<sup class="versenum">28&nbsp;</sup>会堂里的人听见这话，都怒气满胸，<sup class="versenum">29&nbsp;</sup>就起来撵他出城。他们的城造在山上。他们带他到山崖，要把他推下去。<sup class="versenum">30&nbsp;</sup>他却从他们中间直行，过去了。</span></span></p>
	<span lang="ZH-CN"><span lang="ZH-CN"> </span></span>

	<p><span lang="ZH-CN"><span lang="ZH-CN"><sup class="versenum">31&nbsp;</sup>耶稣下到迦百农，就是加利利的一座城，在安息日教训众人。 </span></span></p>
	<span lang="ZH-CN"><span lang="ZH-CN"> <!-- end bible --> </span></span></div>
	</li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">这时期的特点是奠定事工的基础。耶稣有意营造关系型的环境，以新的方式呼召人来作门徒。耶稣的事工从无到有，直至超越了施洗约翰的事工。（<span class="popup-link" @click = "popUp('pop4')"> 约 4:1-3</span>； </span></span></span>
	<div class="popup invisible" id="pop4"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>
	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。 </span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop5')"> 太 4:12</span>； </span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">12&nbsp;</sup>耶稣听见<u class="person underline">约翰</u>下了监，就退到加利利去； </span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop6')"> 路 3:19-20</span>）。 </span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">19&nbsp;</sup>只是分封的王<u class="person underline">希律</u>因他兄弟之妻<u class="person underline">希罗底</u>的缘故，并因他所行的一切恶事，受了<u class="person underline">约翰</u>的责备，<sup class="versenum">20&nbsp;</sup>又另外添了一件，就是把<u class="person underline">约翰</u>收在监里。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->