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
                        <div class="chapter_number ltr"><h1>52.</h1></div>
                        <div class="chapter_title ltr"><h1>海难中得救——船登岛岸</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒27:23-24</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>因我所属、所侍奉的神，他的使者昨夜站在我旁边说：<sup class="versenum">24&nbsp;</sup>&lsquo;<u class="person underline">保罗</u>，不要害怕！你必定站在恺撒面前；并且与你同船的人，神都赐给你了。&rsquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">保罗在亚基帕王以及该撒利亚所有重要人物面前的答辩令人动容，在众目睽睽之下， 保罗坦然无惧地见证耶稣，并由衷地恳请众人归信耶稣，无论得时不得时，保罗心中唯有耶稣，他想做的只有一件事，就是传扬耶稣的名，领人归主。求主在我们当中兴起更多像保罗一样的人，不论在怎样的境况，都不会失去传福音的热诚！保罗不以自己所受的苦难为耻，反而把难处看作基督见证人的记号。不是因为他自己刚强，是因为他认识基督的所是，&ldquo;知道我所信的是谁&rdquo;，也认识基督的所作，&ldquo;深信祂能保全我所交付祂的&rdquo;，因此任何难处&ldquo;都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 罗8:38-39</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>因为我深信：无论是死，是生，是天使，是掌权的，是有能的，是现在的事，是将来的事，<sup class="versenum">39&nbsp;</sup>是高处的，是低处的，是别的受造之物，都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。</p>
	<!-- end bible --></div>
	这是对主耶稣至死忠心、义无反顾的信靠！</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗这一行人包括了百夫长犹流，为数不少的士兵，还有其它囚犯以及保罗的几个同伴，他们所乘的船停留的第一站是西顿，随后来到了每拉，换船直航意大利，由于逆风而行，保罗的船只延误了许多时间才来到佳澳，天公不作美，保罗劝阻众人留在佳澳过冬，但保罗的意见未获采纳。当这艘船只再度启航不久，一股名叫&ldquo;友拉革罗&rdquo;的飓风迫使船只放弃航行，船只在海中漂流了数日，众人几乎完全放弃了获救的希望，就在这个灰心绝望的时刻，保罗站出来鼓励安慰众人，并且告诉他们，他所信奉的上帝已经向他保证，全船没有一人会丧失生命。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒27:27-44》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒27:27-44</button><div class="collapsed" id ="Text0">

<p><sup>27</sup>到了第十四天夜间，船在亚得里亚海飘来飘去。约到半夜，水手以为渐近旱地，<sup>28</sup>就探深浅，探得有十二丈；稍往前行，又探深浅，探得有九丈。<sup>29</sup>恐怕撞在石头上，就从船尾抛下四个锚，盼望天亮。<sup>30</sup>水手想要逃出船去，把小船放在海里，假作要从船头抛锚的样子。<sup>31</sup>保罗对百夫长和兵丁说：&ldquo;这些人若不等在船上，你们必不能得救。 &rdquo;<sup>32</sup>于是兵丁砍断小船的绳子，由它飘去。</p>

<p><sup>33</sup>天渐亮的时候，保罗劝众人都吃饭，说：&ldquo;你们悬望忍饿不吃甚么已经十四天了。<sup>34</sup>所以我劝你们吃饭，这是关乎你们救命的事；因为你们各人连一根头发也不至于损坏。&rdquo; <sup>35</sup>保罗说了这话，就拿着饼，在众人面前祝谢了　神，擘开吃。<sup>36</sup>于是他们都放下心，也就吃了。<sup>37</sup>我们在船上的共有二百七十六个人。<sup>38</sup>他们吃饱了，就把船上的麦子抛在海里，为要叫船轻一点。</p>

<p><sup>39</sup>到了天亮，他们不认识那地方，但见一个海湾，有岸可登，就商议能把船拢进去不能。<sup>40</sup>于是砍断缆索，弃锚在海里，同时也松开舵绳，拉起头篷，顺着风向岸行去。<sup>41</sup>但遇着两水夹流的地方，就把船搁了浅。船头胶住不动，船尾被浪的猛力冲坏。</p>

<p><sup>42</sup>兵丁的意思要把囚犯杀了，恐怕有濮水脱逃的。<sup>43</sup>但百夫长要救保罗，不准他们任意而行，就吩咐会濮水的，跳下水去先上岸，<sup>44</sup>其余的人可以用板子或船上的零碎东西上岸。这样，众人都得了救，上了岸。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/352.mp4" type="button" class="external-movie">
         观看&nbsp;徒27:27-44&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？又是如何克服的呢？</li>
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

<p class="up">暴风雨竟然持续了两个多礼拜，众人又疲乏又惧怕。保罗给兵丁明确的指示，要他们一起留在船上。虽然他们处境危险，但是耶稣持守祂的应许，没有一人受伤。保罗信靠上帝的信实和良善，所有非信徒看见他的榜样，都受了激励。这个例子教导我们，不要管宗教、种族或地位如何，要看重每个人，为他们祷告，关心他们，就像耶稣所做的一样。上帝再次使用百夫长的帮助保护了保罗，也保护了其他囚犯，不被害怕他们逃走的守卫给杀了。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒27:35-37</p>

<p class="forward bible"><sup>35</sup>保罗说了这话，就拿着饼，在众人面前祝谢了　神，擘开吃。<sup>36</sup>于是他们都放下心，也就吃了。<sup>37</sup>我们在船上的共有二百七十六个人。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">在使徒行传这部神学性的作品中，作者为什么用了相当长的篇幅来记载保罗这段航海经历？作者有什么特别的用意吗？为什么？</li>
	<li class="flush">保罗在危急的时刻不但提出实际的建议，而且安慰鼓励绝望的众人，带给众人求生的勇气和盼望，身为囚犯的保罗竟然摇身一变担负起领导的角色，因为他深知祂的神与他同在，而且在过去无数的患难中经历到神的同在和显现，因此如今他能镇定地面对突如其来的危机。</li>
</ul>

<p class="indent2">在现实生活中同样充满各样的挑战或患难，当众人惊慌失措的时候，我们是否能因为我们的神而和别人有不一样的地方？不但带给人希望，并且因此看到在我们里面的神？为什么？</p>

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
	<li class="forward">神在众人性命危急的关头对保罗说话，应许保罗全船的人都将获救，我们看到尽管天有不测风云，人也会做出错误的判断和决策，然而掌权的是神，神的主权运作在任何环境之中。
	<ul class="forward">
		<li class="forward">如同保罗这次的航海经历，我们的人生也会遇到突如其来的风浪，求神帮助我们信靠祂，相信祂的主权和看顾，祂必定会引领我们脱离风暴，平安上岸。</li>
		<li class="forward">把你或你造就的门徒或教会的同工所面临的人生风暴祷告在施恩怜悯的主面前，求祂帮助你们平安的渡过，并在这些事情上彰显主的荣耀。</li>
		<li class="forward">求主也使用你成为身边的家人亲友的安慰和鼓励，在他们面对人生风暴时， 神赐你智慧聪明并分辨能力，带给他们勇气，盼望和喜乐。</li>
	</ul>
	</li>
	<li class="forward">持续推动每月城市祷告联祷会，连接城里各教会的牧者，一起为城市守望并一同认领宣教的族群和地点，以行动支持他们。</li>
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
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">在我们的人生也会遇到突如其来的风浪，求神帮助我们信靠祂，相信祂的主权和看顾，祂必定会引领我们脱离风暴，平安上岸。也求主使用我们成为身边的家人和亲友的安慰与鼓励，在他们面对人生风暴时， 神赐我们智慧聪明并分辨能力，带给他们信心，盼望和勇气。</li>
	<li class="forward">为各样天灾求神的怜悯，人心觉醒并战兢，按神的心意治理这地，也求主看顾那些在患难中的人，成为他们的避难所和依靠。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->