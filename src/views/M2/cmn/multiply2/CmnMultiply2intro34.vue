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
<h1>阶段三 事工训练与向外拓展</h1>
<div id="showVideoOptions"></div>
  <p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P3.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P3.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply2/M2P3.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul>
	<li class="nobreak-final-final">这段时期持续6至9个月，从耶稣到迦百农开始。在此期间，耶稣挑战四位渔夫，他们是自耶稣受洗就跟随的门徒（<span class="popup-link" @click = "popUp('pop1')"> 可1:16-20</span>）。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>耶稣顺着加利利的海边走，看见<u class="person underline">西门</u>和<u class="person underline">西门</u>的兄弟<u class="person underline">安得烈</u>在海里撒网，他们本是打鱼的。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;<sup class="versenum">18&nbsp;</sup>他们就立刻舍了网，跟从了他。<sup class="versenum">19&nbsp;</sup>耶稣稍往前走，又见<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>在船上补网，<sup class="versenum">20&nbsp;</sup>耶稣随即招呼他们。他们就把父亲<u class="person underline">西庇太</u>和雇工人留在船上，跟从耶稣去了。</p>
	<!-- end bible --></div>
	耶稣开始改变他们的优先次序，训练他们去得人。这4人组成最初的宣教团队，但耶稣很快也将利未（<span class="popup-link" @click = "popUp('pop2')"> 可2:13-17</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>耶稣又出到海边去，众人都就了他来，他便教训他们。<sup class="versenum">14&nbsp;</sup>耶稣经过的时候，看见<u class="person underline">亚勒腓</u>的儿子<u class="person underline">利未</u>坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;他就起来跟从了耶稣。<sup class="versenum">15&nbsp;</sup>耶稣在<u class="person underline">利未</u>家里坐席的时候，有好些税吏和罪人与耶稣并门徒一同坐席，因为这样的人多，他们也跟随耶稣。<sup class="versenum">16&nbsp;</sup>法利赛人中的文士看见耶稣和罪人并税吏一同吃饭，就对他门徒说：&ldquo;他和税吏并罪人一同吃喝吗？&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣听见，就对他们说：&ldquo;康健的人用不着医生，有病的人才用得着。我来本不是召义人，乃是召罪人。&rdquo;</p>
	<!-- end bible --></div>
	和其他人加入。</li>
	<li class="nobreak-final-final">另外，当耶稣选召首批事工团队与祂一起同工，他为他们创造&ldquo;实际操练&rdquo; 的机会，包括本地的传福音（<span class="popup-link" @click = "popUp('pop3')"> 可1:21-34</span>），
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>在迦百农赶逐污鬼</h3>

	<p><sup class="versenum">21&nbsp;</sup>到了迦百农，耶稣就在安息日进了会堂教训人。<sup class="versenum">22&nbsp;</sup>众人很稀奇他的教训，因为他教训他们正像有权柄的人，不像文士。<sup class="versenum">23&nbsp;</sup>在会堂里有一个人被污鬼附着，他喊叫说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干？你来灭我们吗？我知道你是谁，乃是神的圣者！&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣责备他说：&ldquo;不要作声！从这人身上出来吧！&rdquo;<sup class="versenum">26&nbsp;</sup>污鬼叫那人抽了一阵风，大声喊叫，就出来了。<sup class="versenum">27&nbsp;</sup>众人都惊讶，以致彼此对问说：&ldquo;这是什么事？是个新道理啊！他用权柄吩咐污鬼，连污鬼也听从了他。&rdquo;<sup class="versenum">28&nbsp;</sup>耶稣的名声就传遍了加利利的四方。</p>

	<p><sup class="versenum">29&nbsp;</sup>他们一出会堂，就同着<u class="person underline">雅各</u>、<u class="person underline">约翰</u>进了<u class="person underline">西门</u>和<u class="person underline">安得烈</u>的家。<sup class="versenum">30&nbsp;</sup><u class="person underline">西门</u>的岳母正害热病躺着，就有人告诉耶稣。<sup class="versenum">31&nbsp;</sup>耶稣进前拉着她的手，扶她起来，热就退了，她就服侍他们。</p>

	<p><sup class="versenum">32&nbsp;</sup>天晚日落的时候，有人带着一切害病的和被鬼附的来到耶稣跟前。<sup class="versenum">33&nbsp;</sup>合城的人都聚集在门前。<sup class="versenum">34&nbsp;</sup>耶稣治好了许多害各样病的人，又赶出许多鬼，不许鬼说话，因为鬼认识他。</p>
	<!-- end bible --></div>
	向整个地区的传福音，并开展更多的宣教事工（<span class="popup-link" @click = "popUp('pop4')"> 可1:35-39</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>次日早晨，天未亮的时候，耶稣起来到旷野地方去，在那里祷告。<sup class="versenum">36&nbsp;</sup><u class="person underline">西门</u>和同伴追了他去，<sup class="versenum">37&nbsp;</sup>遇见了就对他说：&ldquo;众人都找你。&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup class="versenum">39&nbsp;</sup>于是在加利利全地，进了会堂，传道、赶鬼。</p>
	<!-- end bible --></div>
	这种向外拓展的特点是运动的加速，然而反对也加增（<span class="popup-link" @click = "popUp('pop5')"> 可3:6</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>法利赛人出去，同<u class="person underline">希律</u>一党的人商议怎样可以除灭耶稣。</p>
	<!-- end bible --></div>
	</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->