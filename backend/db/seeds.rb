# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.create([
               {
                 title: 'Funny pets',
                 overview: "Let's have fun with these funny pets...",
                 release_date: '2000-05-30'
               },
               {
                 title: 'Funny pets 2',
                 overview: "Let's have fun with these funny pets...",
                 release_date: '2005-05-30'
               },
               {
                 title: 'Funny pets 3',
                 overview: "Let's have fun with these funny pets...",
                 release_date: '2010-05-30'
               },
               {
                 title: 'Funny pets 4',
                 overview: "Let's have fun with these funny pets...",
                 release_date: '2015-05-30'
               }
             ])
