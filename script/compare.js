getval = () => {
    var gross = Number.parseInt(document.getElementById("input1").value);
    var hra = Number.parseInt(document.getElementById("input2").value);
    var lta = Number.parseInt(document.getElementById("input3").value);
    var house = Number.parseInt(document.getElementById("input4").value);
    var other = Number.parseInt(document.getElementById("input5").value);
    var pf = Number.parseInt(document.getElementById("input6").value);
    var mediclaim = Number.parseInt(document.getElementById("input7").value);
    var child_tution_fee = Number.parseInt(document.getElementById("input8").value);
    var standard_deduction = 50000
    var savings = hra + lta + pf + mediclaim + child_tution_fee
    var extraincome = other
    if (house < 0)
        savings = savings - house
    else
        extraincome = extraincome + house
    console.log("saving is " + savings)
    console.log("extra income is " + extraincome)
    var taxable1 = gross - hra - lta + house + other - pf - mediclaim - child_tution_fee - standard_deduction
    console.log("Taxable income is " + taxable1)
    if (taxable1 > 0) {
        if (taxable1 < 250000) {
            var oldtax = 0
        }
        else if (taxable1 >= 250000 && taxable1 < 500000) {
            console.log(0.05 * (taxable1 - 250000))
            var oldtax = 0.05 * (taxable1 - 250000)
            console.log(oldtax)
        }
        else if (taxable1 >= 500000 && taxable1 < 1000000) {
            var oldtax = (0.05 * 250000) + 0.2 * (taxable1 - 500000)
        }
        else
            var oldtax = (0.05 * 250000) + (0.2 * 500000) + 0.3 * (taxable1 - 1000000)
        console.log(oldtax)


        var taxable2 = gross + house + other - standard_deduction
        console.log(taxable2)
        if (taxable2 < 250000) {
            var newtax = 0
        }
        else if (taxable2 >= 250000 && taxable2 < 500000) {
            var newtax = (0.05 * taxable2)
        }
        else if (taxable2 >= 500000 && taxable2 < 750000) {
            var newtax = (0.05 * 250000 + 0.1 * (taxable2 - 500000))
        }
        else if (taxable2 >= 750000 && taxable2 < 1000000) {
            var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * (taxable2 - 750000))
        }
        else if (taxable2 >= 1000000 && taxable2 < 1250000) {
            var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * (taxable2 - 1000000))
        }
        else if (taxable2 >= 1250000 && taxable2 < 1500000) {
            var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * (taxable2 - 1250000))
        }
        else
            var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * 250000 + 0.3 * (taxable2 - 1500000))
        console.log(newtax)

        var taxable3 = gross + house + other - standard_deduction
        console.log(taxable3)
        if (taxable3 < 300000) {
            var latesttax = 0
        }
        else if (taxable3 >= 300000 && taxable3 < 600000) {
            var latesttax = 0.05 * (taxable3 - 300000)
        }
        else if (taxable3 >= 600000 && taxable3 < 900000) {
            var latesttax = 0.05 * 300000 + 0.1 * (taxable3 - 600000)
        }
        else if (taxable3 >= 900000 && taxable3 < 1200000) {
            var latesttax = 0.05 * 300000 + 0.1 * 300000 + .15 * (taxable3 - 900000)
        }
        else if (taxable3 >= 1200000 && taxable3 < 1500000) {
            var latesttax = 0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * (taxable3 - 1200000)
        }
        else
            var latesttax = 0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * 300000 + 0.3 * 300000 + 0.3 * (taxable3 - 1500000)
        console.log(latesttax)

        if (oldtax < newtax && oldtax < latesttax) {
            var besttax = 'Old tax slab before 2020'
            var tax_value = oldtax
        }
        else {
            if (newtax < latesttax) {
                var besttax = 'New tax slab till 30th March 2023'
                var tax_value = newtax
            }
            else if (latesttax < newtax) {
                var besttax = 'New tax slab after 30th March 2023'
                var tax_value = latesttax
            }
            else {
                var besttax = ' '
                var tax_value = oldtax
            }
        }
        var tablebox = document.getElementById("conclusion")
        tablebox.innerHTML = `
        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Tax slab</th>
            <th scope="col">Anual CTC</th>
            <th scope="col">Savings</th>
            <th scope="col">Extra income</th>
            <th scope="col">Tax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Old</th>
            <td>${gross}</td>
            <td>${savings}</td>
            <td>${extraincome}</td>
            <td>${oldtax}</td>
          </tr>
          <tr>
            <th scope="row">New till 30th March 2023</th>
            <td>${gross}</td>
            <td>${savings}</td>
            <td>${extraincome}</td>
            <td>${newtax}</td>
          </tr>
          <tr>
            <th scope="row">New after 30th March 2023</th>
            <td>${gross}</td>
            <td>${savings}</td>
            <td>${extraincome}</td>
            <td>${latesttax}</td>
          </tr>
        </tbody>
      </table>
      <div style="text-align: center;">
      <button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Best tax slab suited for
          you is ${besttax}.</button><br><br>
      <button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Tax to be paid is ${tax_value}.</button>
    </div>
        `
    }
    else
    alert("You might have not filled all the inputs")

}