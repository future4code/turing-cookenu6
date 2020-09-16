import { BaseDatabase } from "./BaseDatabase";


export class RecipesDatabase extends BaseDatabase {
    private static TABLE_NAME = "CookenuRecipes"

    public async createRecipe(id: string, title: string, description: string, creation_date: string): Promise<void> {
        await this.getConnection()
        .insert({
            id,
            title,
            description,
            creation_date
        })
        .into(RecipesDatabase.TABLE_NAME)
    }

    // public async getUserByEmail (email: string): Promise<any> {
    //     const response = await this.getConnection()
    //     .select("*")
    //     .from(RecipesDatabase.TABLE_NAME)
    //     .where("email", email)

    //     return response[0]
    // }

    public async getRecipeById (id: string): Promise<any> {
        const response = await this.getConnection()
        .select("*")
        .from(RecipesDatabase.TABLE_NAME)
        .where("id", id)

        return response[0]
    }
}