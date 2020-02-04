const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Feminist = require('../models/feminist')
const User = require('../models/user')

// this file is just used for reseeding my database (refreshing it back to all my original array items)

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'abigailForeman',
          email: 'abi@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${'👩‍🚒'.repeat(createdUsers.length)} users created`)
      return Feminist.create([
        {
          name: 'Serena Williams',
          yearBorn: 1981,
          placeOfBirth: 'Michigan',
          occupation: 'Professional tennis player',
          image: 'https://media4.s-nbcnews.com/i/newscms/2020_04/3200306/200123-serenawilliams-kf-12a_e40346bb4cef279e5287feabd8eeaa1c.JPG',
          description: 'Serena Williams is not just the greatest tennis player ever, but athlete. Period. As a singles tennis star, she has managed to not only break records within her own field but win them as a one woman army, rather than on a team with other players. She’s an individual who has constantly battled mind games, racism, injuries, and personal strifes, while growing into the fierce competitor she’d become.',
          user: createdUsers[0]
        }, {
          name: 'Gloria Steinem',
          yearBorn: 1934,
          placeOfBirth: 'Ohio',
          occupation: 'Journalist and Social Political Activist',
          image: 'https://www.nationalgeographic.com/content/dam/cultureexploration/2019/03/gloria-steinem/02-gloria-steinem-difficult-women.jpg',
          description: 'Gloria Marie Steinem is an American feminist, journalist, and social political activist who became nationally recognized as a leader and a spokeswoman for the American feminist movement in the late 1960s and early 1970s. Steinem was a columnist for New York magazine, and a co-founder of Ms. magazine.',
          user: createdUsers[0]
        }, {
          name: 'Harinef',
          yearBorn: 1992,
          placeOfBirth: 'Pennsylvania',
          occupation: 'Actress, Model and Activist',
          image: 'https://assets.vogue.com/photos/58916fdb97a3db337a24a582/master/w_2318,h_3000,c_limit/hari-nef-transgender-model-2.jpg',
          description: 'Hari Nef is an American actress, model, and writer based in Los Angeles. Nef made her runway debut at New York Fashion Week Spring 2015, walking for both Hood By Air and Eckhaus Latta. Nef is known for speaking about trans issues.',
          user: createdUsers[0]
        }, {
          name: 'Grace Hopper',
          yearBorn: 1906,
          placeOfBirth: 'New York',
          occupation: 'Computer Scientist',
          image: 'https://stories.vassar.edu/2017/assets/images/170706-legacy-of-grace-hopper-hopper-militarypportrait.jpeg',
          description: 'Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.',
          user: createdUsers[0]
        }, {
          name: 'Missy Elliot',
          yearBorn: 1971,
          placeOfBirth: 'Virginia',
          occupation: 'Musician',
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcx080119cover-003-1562083506.jpg',
          description: 'A groundbreaking singer, rapper, producer and songwriter, Missy Elliott is a hip-hop and cultural icon with hits like Work It, Lose Control (feat. Ciara & Fatman Scoop), Get Ur Freak On, WTF (Where They From) (feat. Pharrell Williams) and Im Better (feat. Lamb), among countless others.',
          user: createdUsers[0]
        }, {
          name: 'Michelle Obama',
          yearBorn: 1964,
          placeOfBirth: 'Illinois',
          occupation: 'Lawyer & Ex First Lady of United States',
          image: 'https://dynamicmedia.livenationinternational.com/Media/v/v/q/3c787dff-0b19-4b13-9a7a-27eb99e5f0be.jpg',
          description: 'Michelle LaVaughn Robinson Obama is an American lawyer, university administrator, and writer, who was the first lady of the United States from 2009 to 2017. She is married to the 44th President of the United States, Barack Obama, and she was the first African American First Lady of the United States.',
          user: createdUsers[0]
        }, {
          name: 'Simone de Beauvoir',
          yearBorn: 1908,
          placeOfBirth: 'Paris',
          occupation: 'Social theorist',
          image: 'https://i.guim.co.uk/img/media/2d6ca75b2b14a040fc8529dbccab9d57a533320f/0_226_2898_3623/master/2898.jpg?width=700&quality=85&auto=format&fit=max&s=7e5522e0132c18a139b1d701e90a5592',
          description: 'Simone Lucie Ernestine Marie Bertrand de Beauvoir was a French writer, intellectual, existentialist philosopher, political activist, feminist and social theorist. Though she did not consider herself a philosopher, she had a significant influence on both feminist existentialism and feminist theory.',
          user: createdUsers[0]
        }, {
          name: 'Angela Davis',
          yearBorn: 1944,
          placeOfBirth: 'Alabama',
          occupation: 'Political Activist & Philosopher',
          image: 'https://www.history.com/.image/t_share/MTU3ODc5MDg3MjM2MzkyNjcx/angela-davis-at-first-news-conference.jpg',
          description: 'A trailblazing voice for black women, Davis played a crucial part in the Civil Rights movement. The political activist was a key leader in the Black Power movement, and though some of her more radical positions and role in political protests have been deemed controversial, she has relentlessly fought to champion the progress of womens rights for over six decades. She most recently served as an honorary cochair for the Womens March on Washington in 2017.',
          user: createdUsers[0]
        }, {
          name: 'Bell Hooks',
          yearBorn: 1952,
          placeOfBirth: 'Kentucky',
          occupation: 'American Author',
          image: 'https://www.lionsroar.com/wp-content/uploads/2015/01/bell-for-Sam.jpg',
          description: 'The American author was known for her social activism that was often mirrored through her writing of oppression, womens rights and race. Some of bell hooks most notable works include Aint I A Woman? Black Women and Feminism and The Feminist Theory in which she declared, "Feminism is a movement to end sexism, sexist exploitation and oppression."',
          user: createdUsers[0]
        }, {
          name: 'Maya Angelou',
          yearBorn: 1928,
          placeOfBirth: 'Missouri',
          occupation: 'American poet, singer, memoirist, and civil rights activist',
          image: 'https://www.thoughtco.com/thmb/2ooGOjsok2BA_IEpnaNzhs0Rjn8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/MayaAngelou-56a48d9c5f9b58b7d0d782a7.jpg',
          description: 'Through her literature, public speaking and powerful writing, Maya Angelou inspired both women and African Americans to overcome gender and race discrimination. In 2011, Angelou was awarded the Presidential Medal of Freedom for her works that spanned over 50 years including 36 books, seven autobiographies and over 50 honorary degrees.',
          user: createdUsers[0]
        }, {
          name: 'Ruth Bader Ginsburg',
          yearBorn: 1933,
          placeOfBirth: 'New York',
          occupation: 'American lawyer and jurist',
          image: 'https://api.time.com/wp-content/uploads/2000/04/ruth-bader-ginsburg-time-100-2015-icons.jpg?w=600&quality=85',
          description: 'Before her tenure as Supreme Court justice, Bader Ginsburg co-founded the Womens Rights Law Reporter in 1970, the first U.S. law journal to focus exclusively on womens rights. Two years later, she co-founded the Womens Rights Project at the American Civil Liberties Union (ACLU), once again making sure womens voices were heard in law. Appointed by President Bill Clinton in 1993, Bader Ginsburg became the second female Supreme Court justice ever, a position she still holds today and uses to advocate for womens rights.',
          user: createdUsers[0]
        }, {
          name: 'Oprah Whinfrey',
          yearBorn: 1954,
          placeOfBirth: 'Mississippi',
          occupation: 'American media executive, actress, talk show host, television producer, and philanthropist',
          image: 'https://ca-times.brightspotcdn.com/dims4/default/366e3e4/2147483647/strip/true/crop/2048x1575+0+0/resize/840x646!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F35%2F5bca91fdc1c0f785345f89c0206a%2Fla-1551387768-erxrjtsf9u-snap-image',
          description: 'Motivated by the unequal pay she received in the start of her broadcasting career, Oprah set out to start her own television show and from there built an empire catering to helping women grow, develop and thrive. "I never did consider or call myself a feminist, but I dont think you can really be a woman in this world and not be." She has since developed the Oprah Winfrey Leadership Academy for Girls, the Oprah Winfrey Network and was awarded the Presidential Medal of Freedom in 2013.',
          user: createdUsers[0]
        }, {
          name: 'Emma Watson',
          yearBorn: 1990,
          placeOfBirth: 'Paris',
          occupation: 'British Actress and Activist',
          image: 'https://www.thesun.co.uk/wp-content/uploads/2019/11/NINTCHDBPICT000308705546.jpg',
          description: 'One of our favourite famous feminists, the whole world used to know her because of her decade playing Hermione Granger. Today Emma Watson (born 1990) is renowned for her work with the United Nations. Our beloved British actress won our hearts with the emotive speech she made at the UN which positioned feminism as a fight not just for women, but for men too. She took the momentum from her captivating speech to spearhead the #HeForShe movement.',
          user: createdUsers[0]
        }, {
          name: 'Malala Yousafza',
          yearBorn: 1997,
          placeOfBirth: 'Pakistan',
          occupation: 'Pakistani activist for female education and the youngest Nobel Prize laureate',
          image: 'https://www.thinkingheads.com/wp-content/uploads/2018/11/malala-yousafzai-conferencista-1.png',
          description: 'The courageous teenager rose to fame with her memoir, I Am Malala, documenting her fearless journey as a young student fighting for access to education in Pakistan. Ever since, Malala has been traveling the world advocating for education rights for women and children through her foundation, The Malala Fund.',
          user: createdUsers[0]
        }, {
          name: 'Chimamanda Ngozi Adichie',
          yearBorn: 1977,
          placeOfBirth: 'Nigeria',
          occupation: 'Writer',
          image: 'https://media.newyorker.com/photos/5b044cc954617935a49216c8/master/pass/180604_r32184.jpg',
          description: 'Most known for her "We Should All Be Feminists" TED Talk that was sampled on Beyoncés self-titled album, Adichie has become a vital author in the modern day feminist movement. Some of her most prominent pieces, Americanah, We Should All Be Feminists and Dear Ijeawele, Or a Feminist Manifesto in Fifteen Suggestions, have been instrumental in advocating for womens rights and representing African culture.',
          user: createdUsers[0]
        }, {
          name: 'Yoko Ono',
          yearBorn: 1933,
          placeOfBirth: 'Japan',
          occupation: 'Japanese multimedia artist, singer, songwriter and peace activist',
          image: 'https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/2.8-755x771.jpg',
          description: 'Ono might be known for being John Lennon’s wife, but she has been an activist for peace and human rights since the 1960s. Her most famous act was when she and Lennon held a "Bed-In for Peace" in their Amsterdam honeymoon suite. In the years and decades following Lennon’s death, she paid for billboards and monuments to spread messages of world peace in his memory. More recently, Ono shares messages of peace through her active social media presence, offering her millions of followers poems and comments on media and politics.',
          user: createdUsers[0]
        }, {
          name: 'Tarana Burke',
          yearBorn: 1973,
          placeOfBirth: 'New York',
          occupation: 'Civil rights activist',
          image: 'https://api.time.com/wp-content/uploads/2018/04/time-100-tarana-burke1.jpg?quality=85&zoom=2',
          description: 'Ushering in a new wave of feminism, Tarana Burke started the #MeToo movement back in 2006, more than a decade before it was heard around the world. An inspiring leader for victims of sexual assault and harassment, Burkes work has allowed hundreds of thousands of women across the globe to speak up about their own sexual assault experiences, and helped open the floodgates for Hollywoods Times Up movement. Burkes "me too" concept created a safe space for women to speak up and fight back against sexual misconduct and marked a new chapter in the future of feminism.',
          user: createdUsers[0]
        }, {
          name: 'Rupi Kaur',
          yearBorn: 1992,
          placeOfBirth: 'India',
          occupation: 'Poet',
          image: 'https://cdn.shopify.com/s/files/1/0058/4397/6259/products/IMG_8756_1440x.jpg?v=1574545783',
          description: 'Canadian poet Kaur is most popular on Instagram, where she gained attention from posting photos of her poems online. Her 2015 book of prose “milk and honey” was widely successful, and brought to light important themes of femininity, loss, love, violence and abuse. Kaur was in the spotlight most recently after she posted a picture on her Instagram page of herself laying with her back toward the camera, menstrual blood showing through her sweatpants. She made a statement about how the majority of people shun this type of photo over the pornification and violence against women, and the photo was soon taken down by Instagram. The picture she shared to Facebook was shared by thousands and made headlines around the world. Later, Instagram restored her picture and apologised, claiming it had been removed by mistake.',
          user: createdUsers[0]
        }, {
          name: 'Frida Kahlo',
          yearBorn: 1907,
          placeOfBirth: 'Mexico',
          occupation: 'Mexican painter',
          image: 'https://www.collectorsweekly.com/uploads/2013/01/Frida-Kahlo.jpg',
          description: 'Frida Kahlo was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the countrys popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.',
          user: createdUsers[0]
        }, {
          name: 'Emmeline Pankhurst',
          yearBorn: 1858,
          placeOfBirth: 'Manchester',
          occupation: 'Suffragette and British activist',
          image: 'https://i.pinimg.com/originals/b3/6a/1d/b36a1d692f91bcc7b5cb9c34d800658e.jpg',
          description: 'Emmeline Pankhurst was a British political activist and organizer of the British suffragette movement who helped women win the right to vote.',
          user: createdUsers[0]
        }, {
          name: 'Adwoa Aboah',
          yearBorn: 1992,
          placeOfBirth: 'London',
          occupation: 'Model and Activist',
          image: 'https://www.numero.com/sites/default/files/images/push/thumb-cover-adwoa-aboah-203.jpg',
          description: 'Adwoa Caitlin Maria Aboah is a British fashion model. In December 2017 she appeared on the cover of British Vogue. She has also been on the cover of American Vogue, Vogue Italia, Vogue Poland, and i-D. In 2017, the fashion industry voted her as Model of the Year for models.com.',
          user: createdUsers[0]
        }, {
          name: 'Alexandria Ocasio-Cortez',
          yearBorn: 1989,
          placeOfBirth: 'New York',
          occupation: 'US politician, congresswoman, activist',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Alexandria_Ocasio-Cortez_Official_Portrait.jpg',
          description: 'Alexandria Ocasio-Cortez, popularly known as AOC, is an American politician and activist who serves as the U.S. Representative for New Yorks 14th congressional district. The district includes the eastern part of the Bronx and portions of north-central Queens in New York City. She is a member of the Democratic Party.',
          user: createdUsers[0]
        }
      ])
    })
    .then(createdFeminists => console.log(`${createdFeminists.length} feminists created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close()) 
})
