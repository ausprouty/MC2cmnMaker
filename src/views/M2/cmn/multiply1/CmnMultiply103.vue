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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>与圣灵同行</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课帮助我们了解圣灵的工作及祂与我们的关系。我们无法依靠自己的能力，活出耶稣的生命，乃要时刻受圣灵管理，从圣灵得力。因为与圣灵同行，能使我们过得胜并结果子的新生命。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p class="back">+ 敬拜赞美</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗66:16-20</p>

<p class="back bible"><sup>16</sup>凡敬畏　神的人，你们都来听！我要述说他为我所行的事。<sup>17</sup>我曾用口求告他，我的舌头也称他为高。<sup>18</sup>我若心里注重罪孽，主必不听。<sup>19</sup>但　神实在听见了，他侧耳听了我祷告的声音。<sup>20</sup>神是应当称颂的！他并没有推却我的祷告，也没有叫他的慈爱离开我。</p>

</div>

<ul class="back">
	<li class="back">感谢赞美我们的神，祂没有推却任何寻求祂之人的祷告，祂的慈爱常与我们同在。让我们借着诗歌来歌颂赞美我们的神。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路15:24</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>因为我这个儿子是死而复活，失而又得的。&rsquo;他们就快乐起来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><p class="back">+ 天父心意</p></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">神不愿一人沉沦，乃愿人人悔改（<span class="popup-link" @click = "popUp('pop7')"> 彼得后书3:9</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>主所应许的尚未成就，有人以为他是耽延，其实不是耽延，乃是宽容你们，不愿有一人沉沦，乃愿人人都悔改。</p>
	<!-- end bible --></div>
	让我们真实体恤并明白神的心意。某日，有一个妇人去拜访她的邻居，在谈话当中，这妇人向她的邻居分享耶稣的故事，邻居就信了基督。可是，这邻居随后哭了起来，说：&ldquo;我先生两个星期前刚过世。你怎么没有早一点告诉我福音呢！？&rdquo; 从这个例子中，我们看到我们永远不晓得人什么时候会离世。所以我们一有机会就要向亲朋邻舍传福音，让他们也来认识这位赐生命的主。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul class="up">
	<li class="up">
	<p class="up"><strong>故事背景</strong></p>

	<p class="up">当我们相信耶稣时，上帝的灵便住在我们里面。祂被称为&ldquo;圣灵&rdquo;，是&ldquo;真理的圣灵&rdquo;，也是&ldquo;我们的帮助者&rdquo;。祂在我们生命中的工作相当重要，祂指引我们明白圣经、为我们祷告、并在人心中作责备、劝勉和回转的工作。祂所作的，为要荣耀耶稣基督。现在让我们一起花时间学习圣灵与我们的关系。</p>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读哥林多前书2:14-3:3两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 哥林多前书2:12-3:3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">12&nbsp;</sup>我们所领受的，并不是世上的灵，乃是从神来的灵，叫我们能知道神开恩赐给我们的事。<sup class="versenum">13&nbsp;</sup>并且我们讲说这些事，不是用人智慧所指教的言语，乃是用圣灵所指教的言语，将属灵的话解释属灵的事。</p>

<p><sup class="versenum">14&nbsp;</sup>然而，属血气的人不领会神圣灵的事，反倒以为愚拙；并且不能知道，因为这些事唯有属灵的人才能看透。<sup class="versenum">15&nbsp;</sup>属灵的人能看透万事，却没有一人能看透了他。<sup class="versenum">16&nbsp;</sup>&ldquo;谁曾知道主的心，去教导他呢？&rdquo;但我们是有基督的心了。</p>

<p><sup class="versenum">1 </sup>弟兄们，我从前对你们说话，不能把你们当做属灵的，只得把你们当做属肉体、在基督里为婴孩的。<sup class="versenum">2&nbsp;</sup>我是用奶喂你们，没有用饭喂你们。那时你们不能吃，就是如今还是不能。<sup class="versenum">3&nbsp;</sup>你们仍是属肉体的，因为在你们中间有嫉妒、纷争，这岂不是属乎肉体、照着世人的样子行吗？</p>
<!-- end bible -->

<p></p>

</div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">分享让你印象最深刻的部分，为什么？</li>
		<li class="up">从这段经文中你学到关于圣灵的什么？</li>
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
<div id="Summary2" class="summary"><p class="up">+ 小结</p></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">虽然基督徒都有圣灵住在他们里面，但并不是所有基督徒都受圣灵引导，得着圣灵的能力。当我们倚靠自己的努力或做自己的主人，圣经说我们是属肉体的基督徒，不能经历丰盛且结果子的生命。</p>

<ul>
	<li class="nobreak-final-final">然而，当我们愿意让圣灵管理我们的生命时，就能结出仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔和节制等生命的果子；而且圣经也应许：&ldquo;凡属基督耶稣的人，是已经把肉体，连肉体的邪情私欲，同钉在十字架上了。&rdquo;（<span class="popup-link" @click = "popUp('pop8')"> 加拉太书5:22-24</span>）

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、<sup class="versenum">23&nbsp;</sup>温柔、节制；这样的事没有律法禁止。<sup class="versenum">24&nbsp;</sup>凡属基督耶稣的人，是已经把肉体连肉体的邪情私欲同钉在十字架上了。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><p class="back">+ 经文背诵（以下经文选其一）</p></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">以弗所书5:18</p>

<p class="forward bible">不要醉酒，酒能使人放荡；乃要被圣灵充满。</p>

<p class="forward">约翰壹书5:14-15</p>

<p class="forward bible"><sup>14</sup>我们若照他的旨意求什么，他就听我们，这是我们向他所存坦然无惧的心。<sup>15</sup>既然知道他听我们一切所求的，就知道我们所求于他的，无不得着。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><p class="forward">+ 福音预备</p></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">介绍《被圣灵充满》的小册子</li>
</ul>

<p class="indent2">（<a href="../multiply103a.html">参看3.1或每人手拿一本小册子）</a></p>

<p class="indent2">这本小册子帮助我们总结并应用刚才所学到有关圣灵的教导。我们也能用这个简单的工具，帮助其他基督徒认识并应用这个重要的真理。</p>

<p class="indent2">许多基督徒认为，这本圣灵小册子的大纲与应用要点，是他们学习过最重要的观念。所以，接下来我们一起熟悉这本小册子的内容，学习应用在生活中，主动与他人分享，一同经历丰盛的基督徒生活。</p>

<ul class="forward">
	<li class="forward">《被圣灵充满》小册子包含四个明显的主题。</li>
</ul>

<p class="indent2">1) 三种人的解释</p>

<p class="indent2"><img alt="Three cirlcles" src="@/assets/sites/mc2/content/M2/cmn/multiply1/M1L3a.png" /></p>

<p class="indent2">1) 我们怎样被圣灵充满</p>

<p class="indent3">祷告文部分解释我们是怎样凭信心被圣灵充满（受圣灵管理，从圣灵得力）。</p>

<p class="indent2">2) 被圣灵充满的结果</p>

<p class="indent3">&ldquo;怎样知道你已被圣灵充满&rdquo;和&ldquo;怎样靠圣灵行事&rdquo;说明被圣灵充满生活的结果。</p>

<p class="indent2">3) 怎样体验神的慈爱和赦免</p>

<p class="indent3">&ldquo;属灵的呼吸&rdquo;讲到怎样持续体验神的慈爱和赦免。</p>

<p class="indent2">充分了解和实际应用这些内容，能使你持续活出被圣灵充满。这些真理就是造就生命的根基。</p>

<ul class="forward">
	<li class="forward">认识&ldquo;属灵呼吸&rdquo;的原则</li>
</ul>

<p class="nobreak-final-final">属灵的呼吸是我们时时刻刻支取神属灵供应的关键。每当圣灵提醒我们的罪，我们就要认罪支取神的慈爱和赦免。操练&ldquo;属灵的呼吸&rdquo;会使我们持续不断地经历丰盛的生命。（<span class="popup-link" @click = "popUp('pop4')"> 约10:10</span>）</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">10&nbsp;</sup>盗贼来，无非要偷窃、杀害、毁坏；我来了，是要叫羊得生命，并且得的更丰盛。</p>
<!-- end bible --></div>

<ul class="forward">
	<li class="indent2">&ldquo;呼出&rdquo;：认罪（同意神对罪的看法）。（<span class="popup-link" @click = "popUp('pop9')"> 约壹1:9</span>）

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent3">1. 同意神的指责：承认我们的不顺服就是罪。</p>

<p class="indent3">2. 感谢神的赦免：感谢基督已经赦免了我们，因他已经为我们的罪死在十字架上，用他的宝血洗净了我们所有的罪。</p>

<p class="indent3">3. 悔改：藉着圣灵的能力，改变我们的态度和行为。</p>

<ul class="forward">
	<li class="indent2">&ldquo;吸入&rdquo;：是凭信心被圣灵充满。</li>
</ul>

<p class="indent3">1. 神的命令也就是祂的旨意，是要我们被圣灵充满。（<span class="popup-link" @click = "popUp('pop6')"> 弗5:18</span>）</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>不要醉酒，酒能使人放荡；乃要被圣灵充满。</p>
<!-- end bible --></div>

<p>2. 神的应许是当我们照着祂的旨意求，祂就必应允我们。（<span class="popup-link" @click = "popUp('pop10')"> 约壹5:14-15</span>）</p>

<div class="popup invisible" id="pop10"><!-- begin bible -->
<p><sup class="versenum">14&nbsp;</sup>我们若照他的旨意求什么，他就听我们，这是我们向他所存坦然无惧的心。<sup class="versenum">15&nbsp;</sup>既然知道他听我们一切所求的，就知道我们所求于他的，无不得着。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul class="forward">
	<li class="forward">
	<p>凭信心被圣灵充满</p>
	</li>
</ul>

<p class="indent">属灵的呼吸<strong>也是表示愿意把生命的主权交给神，渴望从圣灵得引导和力量</strong>。当我们有这样的愿意和渴望，我们就只需要凭着信心按着神的旨意求&ldquo;被圣灵充满&rdquo;，神就必应允我们。</p>

<p class="indent">现在我们可以凭信心借着祷告被圣灵充满（受圣灵掌管，从圣灵得力）：</p>

<p class="indent">&ldquo;亲爱的天父，我需要祢。我承认我一直在管理自己的生命而得罪了祢。感谢祢赦免了我的罪，因为基督已经为我死在十字架上。现在我请基督坐在我生命的宝座上并管理我的生命。求祢按照你的应许用圣灵充满我，也正如祢的话语应许我，只要凭着信心祈求，便可被圣灵充满。如今我感谢祢管理了我的生命，并且用圣灵充满了我。我这样凭信心祷告是奉主耶稣的名。阿们。&rdquo;</p>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">练习画出三个生命的圆圈，本周试着操练&ldquo;属灵的呼吸&rdquo;。</li>
	<li class="forward">本周花时间把《被圣灵充满》小册子阅读一遍，并凭信心被圣灵充满。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent">我在________________（时间/地点）将会__________________（对象/事情）。</p>

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


<p><strong>福音祷告</strong></p>

<p class="forward">亲爱的天父，感谢祢借着圣灵住在我们心里。属灵的呼吸提醒我们可以时刻支取祢属灵供应的关键。求天父帮助我们，每当圣灵提醒我们的罪，就马上认罪并支取祢的慈爱和赦免。属灵的呼吸也是表示我们愿意把生命的主权交给祢，渴望从圣灵得引导和力量。我们愿意每日与圣灵同行，靠圣灵结出生命品格与侍奉的果子。奉主耶稣基督的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->