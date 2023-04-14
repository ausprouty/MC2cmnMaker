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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>10.</h1></div>
                        <div class="chapter_title ltr"><h1>领袖兴起需不断——领袖发展</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒5:29</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup><u class="person underline">彼得</u>和众使徒回答说：&ldquo;顺从神不顺从人，是应当的。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">建得最坚固，关得最妥当的监牢，也无法把使徒留在监牢内。能把使徒留在监牢内的，不是看守的兵丁，也不是执政掌权者，而是神自己。如果神要我们出来，没有任何的监牢能留得住我们。如果神要我们留在监牢里，我们再想尽办法，拉尽关系也不能出来。关键不在于有权拿人者，而在于有能力放人者。有能力放人的神，有权力决定要不要放人。重要的是神在我们身上的旨意，要关或要放。如果神不允许，谁也杀不了神要保护的人。我们如果行在神的旨意中，什么也不用怕。我们信得过神吗？</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当教会成长时，逼迫也随之而来，之前，使徒们曾经受到公会不准传道的口头警告，这一回，成为累犯的使徒们再度进入监狱，就在夜间，一个神迹性的拯救发生了！神的使者将使徒们带出了监狱；当使徒们再度被带到公会面前受审时，他们的答辩和前一次受审时一模一样：服从上帝胜于服从人；使徒们坚决的态度引发了公会的怒气和杀机，幸好有一位受人敬重的律法教师迦玛列挺身而出，说服公会释放了使徒们。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒6:1-7》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒6:1-7</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>那时，门徒增多，有说希腊话的犹太人向希伯来人发怨言，因为在天天的供给上忽略了他们的寡妇。<sup>2</sup>十二使徒叫众门徒来，对他们说：&ldquo;我们撇下　神的道去管理饭食，原是不合宜的。<sup>3</sup>所以，弟兄们，当从你们中间选出七个有好名声、被圣灵充满、智慧充足的人，我们就派他们管理这事。<sup>4</sup>但我们要专心以祈祷传道为事。&rdquo;</p>

<p><sup>5</sup>大众都喜悦这话，就拣选了司提反，乃是大有信心、圣灵充满的人；又拣选腓利、伯罗哥罗、尼迦挪、提门、巴米拿，并进犹太教的安提阿人尼哥拉，<sup>6</sup>叫他们站在使徒面前。使徒祷告了，就按手在他们头上。<sup>7</sup>神的道兴旺起来。在耶路撒冷门徒数目加增的甚多，也有许多祭司信从了这道。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/310.mp4" type="button" class="external-movie">
         观看&nbsp;徒6:1-7&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？如何克服？结果如何？</li>
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
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">随着教会的成长，信徒面对里里外外各样的威胁，像是官长的鞭打，或是被迫与世俗妥协。耶路撒冷教会当时几乎全是犹太人，但是有着两种不同的文化：一个是从小在巴勒斯坦当地长大的犹太人所代表的文化，另一个则是在罗马帝国各地长大，说希腊话的犹太人所代表的文化。而这两种文化衍生出的社会议题俨然也成为教会内的一大问题。教会正刚开始要合一，就因看似不平等的照料以及资源管理的问题，引发怨言。后来解决的方式是让说希腊话的信徒从他们当中选出七个人来帮忙管理，而这七位必须是有好名声、被圣灵充满、智慧充足的人。使徒重新调整领导者的角色任务，赋予新领袖权柄带领关怀及资源管理的事工，如此一来，他们都能专心祈祷传道。第七节的经文为《使徒行传》下第一个总结：&ldquo;信徒人数加增，也有许多犹太祭司信从了这道。&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2><strong>+ 经文背诵</strong></h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒6:3-4</p>

<p class="forward bible"><sup>3</sup>所以，弟兄们，当从你们中间选出七个有好名声、被圣灵充满、智慧充足的人，我们就派他们管理这事。<sup>4</sup>但我们要专心以祈祷传道为事。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你所看到的教会，当人多起来时，会遇到什么样的问题？应该怎样解决呢？为什么？</li>
	<li class="forward">你觉得教会的传道人是否应该以祈祷传道为事，而把其他行政的事交给其他同工办理？或者，传道人也应该负责教会行政事务？使徒们的做法是不是说明管理饭食的事情不重要？使徒处理这事对我们有什么启发或提醒？</li>
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
	<li class="forward">教会如果因为人多而出现问题是自然现象，有怨言就要表达。带领的人要有好的对策，提出解决的方法。解决的关键是要有人承担责任。我们的心态应该是：
	<ul class="forward">
		<li class="forward">教会有问题是增长过程的自然现象，正面接纳并存感恩的心一起面对。</li>
		<li class="forward">我们信徒当学习有&ldquo;怨言&rdquo;及早传达，操练感恩，而非成为问题的一份子。</li>
	</ul>
	</li>
	<li class="forward">组织结构的调整，是为了确保教会的中心使命能够完成。不能为了解决眼前的问题，要使徒改变工作方向，去管理饭食。使徒要继续&ldquo;专心以祈祷传道为事&rdquo;，教会需要另外安排人选管理饭食的事。神的工作没有贵贱之分，为着神的国度和荣耀作的，必蒙悦纳。管理饭食也需要有好名声，被圣灵充满，智慧充足的人。因此在处理教会的事物谨记：
	<ul class="forward">
		<li class="forward">神的工作需要谨慎选人，免受亏损。</li>
		<li class="forward">组织结构调整的结果：神的道兴旺起来。调整之后就有足够的机制容纳更多的增长。因此不要忽视，乃是正面面对，并各按各职，建立基督的身体。</li>
	</ul>
	</li>
	<li class="forward">在教会领袖发展上，求神使你的生命和见识不断长进，有份参与教会领袖的发展，甚至自己成为被发展的领袖之一，更好的受装备，为主所用。</li>
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

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为教会在发展和人数增长时所面对的问题和需要祷告，求神赐教会的牧者和执事同工有智慧和聪明去处理和协调，调整后就能有足够的机制容纳更多的增长。</li>
	<li class="forward">在教会领袖发展上，求神使每个教会弟兄姐妹的生命和见识不断长进，主动并愿意参与领袖的发展，更好的被主所用，成为多人的祝福。</li>
	<li class="forward">分享教会或个人代祷需要。</li>
	<li class="forward">最后请一位做结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->