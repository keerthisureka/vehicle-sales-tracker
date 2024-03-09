import _ from 'lodash';

export function getSum(cars, type){
    let sum = _(cars)
                      .groupBy("type")
                      .map((objs, key) => {
                        if(!type) return _.sumBy(objs, 'units'); // [300, 350, 500]
                        return {
                            'type' : key,
                            'mod' : objs[0].color,
                            'units' : _.sumBy(objs, 'units'),
                            'year' : objs[0].year
                        }
                      })
                      .value()
    return sum;
}

export function getLabels(cars){
    let amountSum = getSum(cars, 'type');
    let Total = _.sum(getSum(cars));

    let  percent = _(amountSum)
                            .map(objs => _.assign(objs, { percent : (100 * objs.total)  / Total}))
                            .value()

    return percent;
}

export function chart_Data(cars, custom){

    let bg = _.map(cars, a => a.color)
    bg = _.uniq(bg)
    let dataValue = getSum(cars)

    const config = {
        data : {
          datasets: [{
              data: dataValue,
              backgroundColor: bg,
              hoverOffset: 4,
              borderRadius : 30,
              spacing: 10
            }]
        },
        options : {
            cutout: 115
        }
    }
    return custom ?? config;

}

export function getTotal(cars){
    return _.sum(getSum(cars));
}