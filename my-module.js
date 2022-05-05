import axios from "axios"

async function getData(userid){
    let { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userid);
    let { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userid).then()


    //objeye posts adında yeni bir id açılıyor, gelen post bilgisi array içinde object olarak gönderiliyor.
    user.posts = [{...post[0]}];// post[0] ile sadece ilk elemanı alıyoruz
    console.log(user);
};

export default getData;