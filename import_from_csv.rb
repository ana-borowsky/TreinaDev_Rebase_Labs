require 'csv'
require 'pg'

table = CSV.parse(File.read("data.csv"), headers: true, col_sep:';')

conn = PG.connect("postgres://postgres@localhost:5432", dbname: 'tests' )
puts(conn.exec("SELECT 1" ).to_a)
