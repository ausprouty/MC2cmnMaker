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
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣开始传道</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路4:18-19</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>&ldquo;主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人，差遣我报告被掳的得释放、瞎眼的得看见，叫那受压制的得自由，<sup class="versenum">19&nbsp;</sup>报告神悦纳人的禧年。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">施洗约翰在犹太的旷野传道，说：&ldquo;天国近了，你们应当悔改！&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 太3:1-2</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>那时，有施洗的<u class="person underline">约翰</u>出来，在犹太的旷野传道说：<sup class="versenum">2&nbsp;</sup>&ldquo;天国近了，你们应当悔改！&rdquo;</p>
	<!-- end bible --></div>
	&ldquo;天国&rdquo;是犹太人对永恒的特定称呼，外邦人很少这样提，这也是《马太福音》的写作特点，因为这是马太专为犹太人所写的福音。天国近了提醒我们要趁着还有今日，赶紧向神悔改。有耳可听的，都应当听！</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">这一段记载耶稣在加利利、拿撒勒一带开始他传道的工作。不久加利利、叙利亚、 底加波利、耶路撒冷、犹太、约旦河外的人纷纷来跟随耶稣。马太引用以赛亚书描绘世人的属灵光景是&ldquo;在黑暗里&rdquo;和&ldquo;坐在死荫之地&rdquo;。圣经把福音比喻成照亮黑暗的&ldquo;大光&rdquo;，能够把世人从死亡中拯救出来。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音 4:12-17》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音 4:12-17</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>耶稣听见约翰下了监，就退到加利利去；<sup>13</sup>后又离开拿撒勒，往迦百农去，就住在那里。那地方靠海，在西布伦和拿弗他利的边界上。<sup>14</sup>这是要应验先知以赛亚的话，<sup>15</sup>说：&ldquo;西布伦地，拿弗他利地，就是沿海的路，约旦河外，外邦人的加利利地。<sup>16</sup>那坐在黑暗里的百姓，看见了大光；坐在死荫之地的人，有光发现照着他们。&rdquo; <sup>17</sup>从那时候，耶稣就传起道来，说：&ldquo;天国近了，你们应当悔改！&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/216.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音 4:12-17&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣进入事工的转换期，这段期间的一开始，约翰被下到监里，促使耶稣往北回到加利利。耶稣在自己的家乡遭到拒绝后，祂迁到湖边的迦百农城，居住在那里，名声开始传遍四方。祂的新住处就在当时主要的跨国高速公路上，这显然是有策略性的安排。此时，施洗约翰被监禁，需要新的领导人来传讲天国信息。从那时候，耶稣开始宣讲和约翰一样的信息：&ldquo;天国近了，你们应当悔改&rdquo;。</p>

<ul>
	<li class="nobreak-final-final">(进深学习：<span class="popup-link" @click = "popUp('pop3')"> 马可福音1:14-15</span>)

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">约翰</u>下监以后，耶稣来到加利利，宣传神的福音，<sup class="versenum">15&nbsp;</sup>说：&ldquo;日期满了，神的国近了！你们当悔改，信福音！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太4:17</p>

<p class="forward bible">从那时候，耶稣就传起道来，说：&ldquo;天国近了，你们应当悔改！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">施洗约翰非常清楚自己的身份和使命，眼见自己事奉的目的已经达成，他由衷地欢喜快乐并且坦然断言&ldquo;他必兴旺，我必衰微&rdquo;。今天，神给你我的呼召和人生使命是什么？你在忠心执行吗？</li>
	<li class="forward">你会如何形容所住的城市？他们需要耶稣吗？你想若我们这个社区、这个城市、这个国家的同胞都愿意接受耶稣&ldquo;真光&rdquo;照进来和改变，这种情景将会如何？</li>
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
	<li class="forward">立定心志，在神的话语上下功夫，并在生活和家庭上尽职，凡事讨主的喜悦。</li>
	<li class="forward">求主开你的心眼，有敏锐的洞察能力，接下来一周，为你的家庭、所在的职场、学校、小区、城市和国家祷告。求主的真光照进每个人心中、显明黑暗角落一切不公不义的恶行。愿众人的心都愿意&ldquo;行公义、好怜悯，存谦卑的心与神同行。&rdquo;</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">监察人心的主，祢知道人心所存的，世人无法在祢里面隐藏自己。主啊，我们心中的意念祢都晓得。我们为所处的环境，城市和国家祷告，任何不公不义的事、人心的一切诡诈和败坏，甚至公然悖逆和逼迫祢的百姓和教会的罪，求主赦免。求主真光照耀，将一切的黑暗驱散，将人心夺回。我们祷告每一千人中就有一间教会或小组，成为这地的灯塔，指引他们回到父神的身边。感恩祷告是奉我们主耶稣的圣名，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->