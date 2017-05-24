# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


bethenny = Housewife.create(
            name: "Bethenny Frankel",
            franchise: "NYC",
            spouse: "None",
            net_worth: 25000000,
            plastic_surgery: true,
            age: 46
)

luann = Housewife.create(
            name: "Luann De Lesseps",
            franchise: "NYC",
            spouse: "Tom D'Agostino",
            net_worth: 15000000,
            plastic_surgery: true,
            age: 52
)

ramona = Housewife.create(
            name: "Ramona Singer",
            franchise: "NYC",
            spouse: "None",
            net_worth: 18000000,
            plastic_surgery: true,
            age: 59
)
