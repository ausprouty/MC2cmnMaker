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
                        <div class="chapter_number ltr"><h1>10.2.</h1></div>
                        <div class="chapter_title ltr"><h1>如何预备与分享个人见证</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <ul class="forward">
	<li class="forward">
	<h2><strong>写个人见证应注意的事项：</strong></h2>

	<ul class="forward">
		<li class="forward"><strong>应该做的：</strong>

		<ul>
			<li class="forward">当你在写时祈求神给你智慧与指示。</li>
			<li class="forward">预备你的见证在个人或群体中分享。</li>
			<li class="forward">应在限定的时间内完成你的见证。</li>
			<li class="forward">应真实化，不要给人一个印象，基督已解决你生活上的各种难题。你应说藉着顺服主，你可以得胜有余了。</li>
			<li class="forward">考虑你的听众，你的个人见证应针对某一特定听众而讲出，让他们能与你有同样的感受。</li>
			<li class="forward">广泛的传讲耶稣，他在你的个人见证中应占有重要的地位。</li>
		</ul>
		</li>
		<li class="forward"><strong>不应该做的事：</strong>
		<ul>
			<li class="forward">不要以消极的态度来影射教会、机构和他人。</li>
			<li class="forward">避免提及教派或教会的名称。</li>
			<li class="forward">避免以讲道式讲述，应以对话式来述说你的见证。</li>
			<li class="forward">除非加以解释，否则不要用听众听不明白的词句。诸如：&ldquo;交通&rdquo;、&ldquo;跌倒&rdquo;或&ldquo;软弱&rdquo;。</li>
			<li class="forward">除非加以清楚解释，避免用圣经或宗教的词句。诸如：&ldquo;救恩&rdquo;、&ldquo;悔改&rdquo;、&ldquo;称义&rdquo;。</li>
		</ul>
		</li>
		<li class="forward"><strong>写作模式</strong>：当你在写个人见证时，应将它当成是对一个朋友讲而不是在演讲。
		<ul>
			<li class="forward">应用好的引言以吸引听众的注意力。</li>
			<li class="forward">从开始到末了应以积极的态度讲述。</li>
			<li class="forward">对每一件事应有描述，要准确。</li>
			<li class="forward">引用能引起共鸣的例证。</li>
			<li class="forward">应用一、两处经文，但必须与你的见证有关联。若听众对圣经不熟悉时，对有关的经文应加以解释。（例如应用&ldquo;耶稣的一位门徒说：&hellip;&rdquo;好过使用&ldquo;约翰一书5：11-13节说：&hellip;&rdquo;）</li>
			<li class="forward">必要时应加以修正甚至重写。</li>
			<li class="forward">应妥善及有逻辑性地结束你的个人见证。</li>
		</ul>
		</li>
	</ul>
	</li>
	<li class="forward">
	<h2>怎样讲出你的见证</h2>

	<ul class="forward">
		<li class="forward">重复练习讲述你的见证直到熟练自然。</li>
		<li class="forward">靠着圣灵的能力，以肯定的语气分享你的见证。</li>
		<li class="forward">常常喜乐，求主使你脸上常常带着笑容。</li>
		<li class="forward">清楚地讲述，语调要自然、轻松、声音要够大，让人听得到。</li>
		<li class="forward">不要在上台下台时，边走边讲。</li>
		<li class="forward">避免紧张动作，如：搓鼻子、摇动身子、弄响口袋银币、玩弄笔或清嗓子等。</li>
		<li class="forward">在你的见证中避免辩论、被情绪影响或勉强别人接受主。因为唯有神透过圣灵能感动和改变人心（<span class="popup-link" @click = "popUp('pop1')"> 太16:17</span>；
		<div class="popup invisible" id="pop1"><!-- begin bible -->
		<p><sup class="versenum">17&nbsp;</sup>耶稣对他说：&ldquo;<u class="person underline">西门</u>&middot;<u class="person underline">巴约拿</u>，你是有福的，因为这不是属血肉的指示你的，乃是我在天上的父指示的。</p>
		<!-- end bible --></div>
		<span class="popup-link" @click = "popUp('pop2')"> 约3:5-6</span>；

		<div class="popup invisible" id="pop2"><!-- begin bible -->
		<p><sup class="versenum">5&nbsp;</sup>耶稣说：&ldquo;我实实在在地告诉你：人若不是从水和圣灵生的，就不能进神的国。<sup class="versenum">6&nbsp;</sup>从肉身生的就是肉身，从灵生的就是灵。</p>
		<!-- end bible --></div>
		<span class="popup-link" @click = "popUp('pop3')"> 林前2:4,5</span>）。

		<div class="popup invisible" id="pop3"><!-- begin bible -->
		<p><sup class="versenum">4&nbsp;</sup>我说的话、讲的道，不是用智慧委婉的言语，乃是用圣灵和大能的明证，</p>
		<!-- end bible --></div>
		</li>
		<li class="forward">避免提到任何宗派、人名或教会，特别是以反面的语气。</li>
		<li class="forward">要记住，成功的个人见证是靠着圣灵的大能去传讲，并将结果交托给神。</li>
	</ul>
	</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->