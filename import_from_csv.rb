require 'csv'
require 'pg'

conn = PG.connect("postgres://postgres@localhost:5432", dbname: 'rebase_labs')

table = CSV.parse(File.read("data.csv"), headers: true, col_sep:';')

table.each do |row|
  conn.exec("INSERT INTO data(cpf,
                              nome_paciente,
                              email_paciente,
                              data_nascimento_paciente,
                              endereco_paciente,
                              cidade_paciente,
                              estado_paciente,
                              crm_medico,
                              crm_medico_estado,
                              nome_medico,
                              email_medico,
                              token_resultado_exame,
                              data_exame,
                              tipo_exame,
                              limites_tipo_exame,
                              resultado_tipo_exame)
                              VALUES('#{row["cpf"]}', '#{row["nome paciente"]}',
                                     '#{row["email paciente"]}', '#{row["data nascimento paciente"]}',
                                     '#{row["endereço/rua paciente"]}', '#{row["cidade paciente"].gsub("'", "\\'")}',
                                     '#{row["estado patiente"]}', '#{row["crm médico"]}',
                                     '#{row["crm médico estado"]}', '#{row["nome médico"]}',
                                     '#{row["email médico"]}', '#{row["token resultado exame"]}',
                                     '#{row["data exame"]}', '#{row["tipo exame"]}',
                                     '#{row["limites tipo exame"]}', #{row["resultado tipo exame"]})")
end










