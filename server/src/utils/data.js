const fs = require('fs')

let data = {
    data: [
      {
        id: 1,
        name: "Projecto 1",
        price: "free",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 2,
        name: "Tema 1",
        price: "3",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 3,
        name: "plugin 3",
        price: "40",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 4,
        name: "Tema 56",
        price: "free",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 5,
        name: "tool 4",
        price: "50",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 6,
        name: "lib 45",
        price: "2",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 7,
        name: "lib 67",
        price: "free",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 8,
        name: "Tema 20",
        price: "free",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
      },
      {
        id: 9,
        name: "projecto 34",
        price: "3",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 10,
        name: "Tema 4656",
        price: "7",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 11,
        name: "Tema 2343",
        price: "2",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 12,
        name: "tool 34",
        price: "free",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
      {
        id: 13,
        name: "tool wdasd",
        price: "2",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "https://random.imagecdn.app/350/218",
        tags: ["js", "productivity"],
      },
    ],
  }

for (let prop in data.data) {
  let {id, name, description, price, image, tags} = data.data[prop]
  data = { data: [
    ...data.data,
    { 
      name,
      description,
      price,
      image,
      tags,
      title: `titulo ${parseInt(prop)+1}`,
      visibility: true,
      shortDescription: `Lorem ipsum ${data.data[prop].name}`,
      creationDate: new Date(2023,9,28,0,0,0),
      updateDate: new Date(2023,9,28,0,0,0),
      commentsAllowed: true,
      views: prop,
      status: 'development?',
    }
  ]}
}

let filter = {data: data.data.filter((x) => x.title)}
fs.writeFileSync(__dirname+'/projects.json',JSON.stringify(filter,'','\n'),'utf-8')