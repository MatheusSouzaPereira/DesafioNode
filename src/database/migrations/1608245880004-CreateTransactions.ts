import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// Migration Up é de criação de tabelas e colunas

// Quando adicionamos type = decimal no postgress por padrão devemos colocar :
// Precision para informar até quantos numeros ele pode está recebendo ex: 10 digitos
// Scale ele pode está recebendo até quantos digitos ao lado direito , quantas casas decimais
export default class CreateTransactions1608245880004
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
