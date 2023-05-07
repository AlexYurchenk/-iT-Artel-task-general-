const root = document.getElementById('root');
//task 4
let array = [
    { date: '2017-01-10' },
    { date: '2016-05-18' },
    { date: '2002-12-20' },
    { date: '2020-06-30' },
];
array.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

//task 5
const handleRootClick = (e) => {
    if (e.target.nodeName !== 'DIV') {
        return;
    }
    console.log(e.target.id);
};
root.addEventListener('click', handleRootClick);
