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
                        <div class="chapter_number ltr"><h1>17.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《宣教士：包忠杰》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2>包忠杰 (Paul Henry Bartel)1904~2001</h2>

<p class="forward">1904年7月19日，包忠杰出生在中国直隶 （今河北省）大名府，在山东省长大。父亲包志理 (Rev. Henry C. Bartel) 是美国门诺会宣教士，系于义和团之乱后首批进入中国的西方宣教士，曾先后在河北、天津及蒙古等地宣教。包忠杰六、七岁时，曾回美国入小学读书，八岁时又回到中国。塑铸思想的少年时期，则是在中国受的教育。</p>

<p class="forward">1925年，包忠杰回到美国，进入堪萨斯州他泊学院（Tabor College, Hillsboro, Kansas）接受大学教育；毕业后进普林斯顿神学院（Princeton Theological Seminary）深造。1929年，包忠杰又回到中国。1931年，包忠杰在武昌与白爱兰（Ina Birkey）女士结婚，婚后伉俪同心，一起前往四川和贵州边界的龙潭、松桃山区，从事宣教、开荒植堂工作。这一带地区十分贫穷落后，以盗匪猖獗见称；要领人信主，有如进入虎穴取子。若不是受到主的大爱感动，恐怕很难在这些地方留下来，而且一晃便是十几、二十年。</p>

<p class="forward">包忠杰早期在四川龙潭宣教时，长女不幸在山区染上痢疾，因地处穷乡僻壤，缺医少药，且交通不便，在赶往医院途中不治去世，令他夫妇俩伤痛欲绝。但他们仍然持守着原来的意愿，继续留在该地，且认定那是神呼召他们事奉的岗位。</p>

<p class="forward">有一次，包中杰正在带领信徒聚会敬拜神，有位彪形大汉腰佩大刀前来听道。包忠杰见其异于常人，会后特地趋前寒暄，才知此人乃是一名土匪。一次打劫，无意中获得一本圣经，翻阅之余却难以明白， 特前来求教。经过详细解说耶稣基督道成肉身，来到人世间救赎的福音，此人后来居然改邪归正，成为基督徒，进而热爱传扬福音。1996年，包牧师旧地重游，回去探望信徒时，还遇见这位弟兄的外孙女。她继承先祖遗志成为传道人，四处传讲福音，引人归主。</p>

<p class="forward">1937年，包中杰夫妇携家回美国度假，适逢日军侵华，中日战争爆发。包忠杰把家人安置在南加州，毅然抛妻别雏，只身回到中国，共赴国难，在艰苦的战争环境中工作。二战结束后，他回到美国与家人团聚，并且进入芝加哥大学（University of Chicago）完成文学硕士学位。1946年末，包忠杰抵达上海，恢复宣道书局（今宣道出版社），开始主持文字工作；次年又开始担任《圣经报》主编。</p>

<p class="forward">1949年以后，包忠杰受到中国政府驱逐，但他不愿返回美国，而是留在香港，继续向华人宣教，并在香港出版《灯塔》杂志， 1955至1960年间担任《灯塔》编辑。《灯塔》普及香港、台湾及东南亚等地，销量曾高达35,000 多份。包忠杰从经验中发掘出独特的见解来劝勉同工，他说∶&ldquo;作编辑犹如做牧者。牧师所牧养的是看得见的羊群，编辑却是牧养一大群看不见或难以接触的羊群。如何选取对灵命有益的&lsquo;天粮&rsquo; 供给主的羊群，乃是好牧人最需要关心的&rdquo;。 1965至70年，他再度回港，担任宣道书局的经理和《圣经报》主编，该报在他离港返美后于1973年停刊。</p>

<p class="forward">1970年，包忠杰退休返回美国，任教于加拿大圣经学院，发起留美加中国学生团契和组织冬令会，又推动华人教会的建立。 1971 年9月，第一间华人宣道会在加拿大雷城（Regina）成立。他深爱华人的灵魂，退休后，还周访澳洲及亚洲各国，观察华人社会灵命的需要。1978年，他访问中南美洲华人；1980 年中国开放以后，他先后多次访问中国，最后一次已届92岁高龄，心系中国之情可见一斑。</p>

<p class="forward">包忠杰自幼成长于中国，除讲得一口流利带四川口音的普通话外，中文造诣亦相当深厚，能轻易用中文写作，并且博学多才，对中国文化有非常精深的研究。他是从事基督教文字宣教事工的先驱，使中国基督徒受益良多。他的著作包括《诗篇注解》、《旧约中的祷告》和 《新约中的祷告》，并且将宣信的《能力浇灌&mdash; &mdash;旧约圣经论》和慕安德烈的《宝血的能力》译为中文，他的著述广受华人基督徒所喜爱。</p>

<p class="forward">包忠杰牧师为《圣经报》的停刊经常耿耿于怀，数度邀约多位文字工作前辈，同商复刊。在他积极倡议和鼓吹带动下，2000 年，在美国三藩市召开几次复刊筹划会议。当时年届9 6岁高龄的包牧师，特地远从加州圣巴巴拉（Santa Barbara）专程来开会。他头脑清晰，讲话满有气力。《圣经报》终于在2000年12月实现复刊，并以简体字印制发行。包忠杰亲眼目睹多年心愿梦境成真，老怀大感欣慰。2001年6月25日，包忠杰在美国去世，享年97岁。可说是将毕生的年月、青春和才智，完全奉献给了中国人民。</p>

<p class="forward">《华人基督教史人物辞典》</p>

<p class="forward">http://www.bdcconline.net/zh-hans/stories/by-person/b/bao-zhongjie.php</p>




<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->