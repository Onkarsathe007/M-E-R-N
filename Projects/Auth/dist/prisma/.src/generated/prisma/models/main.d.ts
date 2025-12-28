import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model main
 *
 */
export type mainModel = runtime.Types.Result.DefaultSelection<Prisma.$mainPayload>;
export type AggregateMain = {
    _count: MainCountAggregateOutputType | null;
    _avg: MainAvgAggregateOutputType | null;
    _sum: MainSumAggregateOutputType | null;
    _min: MainMinAggregateOutputType | null;
    _max: MainMaxAggregateOutputType | null;
};
export type MainAvgAggregateOutputType = {
    id: number | null;
};
export type MainSumAggregateOutputType = {
    id: number | null;
};
export type MainMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
};
export type MainMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
};
export type MainCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    _all: number;
};
export type MainAvgAggregateInputType = {
    id?: true;
};
export type MainSumAggregateInputType = {
    id?: true;
};
export type MainMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type MainMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type MainCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    _all?: true;
};
export type MainAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which main to aggregate.
     */
    where?: Prisma.mainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mains to fetch.
     */
    orderBy?: Prisma.mainOrderByWithRelationInput | Prisma.mainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.mainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mains
    **/
    _count?: true | MainCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MainAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MainSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MainMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MainMaxAggregateInputType;
};
export type GetMainAggregateType<T extends MainAggregateArgs> = {
    [P in keyof T & keyof AggregateMain]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMain[P]> : Prisma.GetScalarType<T[P], AggregateMain[P]>;
};
export type mainGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mainWhereInput;
    orderBy?: Prisma.mainOrderByWithAggregationInput | Prisma.mainOrderByWithAggregationInput[];
    by: Prisma.MainScalarFieldEnum[] | Prisma.MainScalarFieldEnum;
    having?: Prisma.mainScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MainCountAggregateInputType | true;
    _avg?: MainAvgAggregateInputType;
    _sum?: MainSumAggregateInputType;
    _min?: MainMinAggregateInputType;
    _max?: MainMaxAggregateInputType;
};
export type MainGroupByOutputType = {
    id: number;
    username: string;
    password: string;
    _count: MainCountAggregateOutputType | null;
    _avg: MainAvgAggregateOutputType | null;
    _sum: MainSumAggregateOutputType | null;
    _min: MainMinAggregateOutputType | null;
    _max: MainMaxAggregateOutputType | null;
};
type GetMainGroupByPayload<T extends mainGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MainGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MainGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MainGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MainGroupByOutputType[P]>;
}>>;
export type mainWhereInput = {
    AND?: Prisma.mainWhereInput | Prisma.mainWhereInput[];
    OR?: Prisma.mainWhereInput[];
    NOT?: Prisma.mainWhereInput | Prisma.mainWhereInput[];
    id?: Prisma.IntFilter<"main"> | number;
    username?: Prisma.StringFilter<"main"> | string;
    password?: Prisma.StringFilter<"main"> | string;
};
export type mainOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type mainWhereUniqueInput = Prisma.AtLeast<{
    username?: string;
    AND?: Prisma.mainWhereInput | Prisma.mainWhereInput[];
    OR?: Prisma.mainWhereInput[];
    NOT?: Prisma.mainWhereInput | Prisma.mainWhereInput[];
    id?: Prisma.IntFilter<"main"> | number;
    password?: Prisma.StringFilter<"main"> | string;
}, "username">;
export type mainOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    _count?: Prisma.mainCountOrderByAggregateInput;
    _avg?: Prisma.mainAvgOrderByAggregateInput;
    _max?: Prisma.mainMaxOrderByAggregateInput;
    _min?: Prisma.mainMinOrderByAggregateInput;
    _sum?: Prisma.mainSumOrderByAggregateInput;
};
export type mainScalarWhereWithAggregatesInput = {
    AND?: Prisma.mainScalarWhereWithAggregatesInput | Prisma.mainScalarWhereWithAggregatesInput[];
    OR?: Prisma.mainScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mainScalarWhereWithAggregatesInput | Prisma.mainScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"main"> | number;
    username?: Prisma.StringWithAggregatesFilter<"main"> | string;
    password?: Prisma.StringWithAggregatesFilter<"main"> | string;
};
export type mainCreateInput = {
    id?: number;
    username: string;
    password: string;
};
export type mainUncheckedCreateInput = {
    id?: number;
    username: string;
    password: string;
};
export type mainUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mainUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mainCreateManyInput = {
    id?: number;
    username: string;
    password: string;
};
export type mainUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mainUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type mainCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type mainAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type mainMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type mainMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type mainSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type mainSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["main"]>;
export type mainSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["main"]>;
export type mainSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["main"]>;
export type mainSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
};
export type mainOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["main"]>;
export type $mainPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "main";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        password: string;
    }, ExtArgs["result"]["main"]>;
    composites: {};
};
export type mainGetPayload<S extends boolean | null | undefined | mainDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mainPayload, S>;
export type mainCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MainCountAggregateInputType | true;
};
export interface mainDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['main'];
        meta: {
            name: 'main';
        };
    };
    /**
     * Find zero or one Main that matches the filter.
     * @param {mainFindUniqueArgs} args - Arguments to find a Main
     * @example
     * // Get one Main
     * const main = await prisma.main.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mainFindUniqueArgs>(args: Prisma.SelectSubset<T, mainFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Main that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mainFindUniqueOrThrowArgs} args - Arguments to find a Main
     * @example
     * // Get one Main
     * const main = await prisma.main.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mainFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mainFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Main that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainFindFirstArgs} args - Arguments to find a Main
     * @example
     * // Get one Main
     * const main = await prisma.main.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mainFindFirstArgs>(args?: Prisma.SelectSubset<T, mainFindFirstArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Main that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainFindFirstOrThrowArgs} args - Arguments to find a Main
     * @example
     * // Get one Main
     * const main = await prisma.main.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mainFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mainFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mains
     * const mains = await prisma.main.findMany()
     *
     * // Get first 10 Mains
     * const mains = await prisma.main.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mainWithIdOnly = await prisma.main.findMany({ select: { id: true } })
     *
     */
    findMany<T extends mainFindManyArgs>(args?: Prisma.SelectSubset<T, mainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Main.
     * @param {mainCreateArgs} args - Arguments to create a Main.
     * @example
     * // Create one Main
     * const Main = await prisma.main.create({
     *   data: {
     *     // ... data to create a Main
     *   }
     * })
     *
     */
    create<T extends mainCreateArgs>(args: Prisma.SelectSubset<T, mainCreateArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Mains.
     * @param {mainCreateManyArgs} args - Arguments to create many Mains.
     * @example
     * // Create many Mains
     * const main = await prisma.main.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends mainCreateManyArgs>(args?: Prisma.SelectSubset<T, mainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Mains and returns the data saved in the database.
     * @param {mainCreateManyAndReturnArgs} args - Arguments to create many Mains.
     * @example
     * // Create many Mains
     * const main = await prisma.main.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Mains and only return the `id`
     * const mainWithIdOnly = await prisma.main.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends mainCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Main.
     * @param {mainDeleteArgs} args - Arguments to delete one Main.
     * @example
     * // Delete one Main
     * const Main = await prisma.main.delete({
     *   where: {
     *     // ... filter to delete one Main
     *   }
     * })
     *
     */
    delete<T extends mainDeleteArgs>(args: Prisma.SelectSubset<T, mainDeleteArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Main.
     * @param {mainUpdateArgs} args - Arguments to update one Main.
     * @example
     * // Update one Main
     * const main = await prisma.main.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends mainUpdateArgs>(args: Prisma.SelectSubset<T, mainUpdateArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Mains.
     * @param {mainDeleteManyArgs} args - Arguments to filter Mains to delete.
     * @example
     * // Delete a few Mains
     * const { count } = await prisma.main.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends mainDeleteManyArgs>(args?: Prisma.SelectSubset<T, mainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mains
     * const main = await prisma.main.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends mainUpdateManyArgs>(args: Prisma.SelectSubset<T, mainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mains and returns the data updated in the database.
     * @param {mainUpdateManyAndReturnArgs} args - Arguments to update many Mains.
     * @example
     * // Update many Mains
     * const main = await prisma.main.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Mains and only return the `id`
     * const mainWithIdOnly = await prisma.main.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends mainUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Main.
     * @param {mainUpsertArgs} args - Arguments to update or create a Main.
     * @example
     * // Update or create a Main
     * const main = await prisma.main.upsert({
     *   create: {
     *     // ... data to create a Main
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Main we want to update
     *   }
     * })
     */
    upsert<T extends mainUpsertArgs>(args: Prisma.SelectSubset<T, mainUpsertArgs<ExtArgs>>): Prisma.Prisma__mainClient<runtime.Types.Result.GetResult<Prisma.$mainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Mains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainCountArgs} args - Arguments to filter Mains to count.
     * @example
     * // Count the number of Mains
     * const count = await prisma.main.count({
     *   where: {
     *     // ... the filter for the Mains we want to count
     *   }
     * })
    **/
    count<T extends mainCountArgs>(args?: Prisma.Subset<T, mainCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MainCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MainAggregateArgs>(args: Prisma.Subset<T, MainAggregateArgs>): Prisma.PrismaPromise<GetMainAggregateType<T>>;
    /**
     * Group by Main.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends mainGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mainGroupByArgs['orderBy'];
    } : {
        orderBy?: mainGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the main model
     */
    readonly fields: mainFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for main.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__mainClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the main model
 */
export interface mainFieldRefs {
    readonly id: Prisma.FieldRef<"main", 'Int'>;
    readonly username: Prisma.FieldRef<"main", 'String'>;
    readonly password: Prisma.FieldRef<"main", 'String'>;
}
/**
 * main findUnique
 */
export type mainFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter, which main to fetch.
     */
    where: Prisma.mainWhereUniqueInput;
};
/**
 * main findUniqueOrThrow
 */
export type mainFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter, which main to fetch.
     */
    where: Prisma.mainWhereUniqueInput;
};
/**
 * main findFirst
 */
export type mainFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter, which main to fetch.
     */
    where?: Prisma.mainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mains to fetch.
     */
    orderBy?: Prisma.mainOrderByWithRelationInput | Prisma.mainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mains.
     */
    cursor?: Prisma.mainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mains.
     */
    distinct?: Prisma.MainScalarFieldEnum | Prisma.MainScalarFieldEnum[];
};
/**
 * main findFirstOrThrow
 */
export type mainFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter, which main to fetch.
     */
    where?: Prisma.mainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mains to fetch.
     */
    orderBy?: Prisma.mainOrderByWithRelationInput | Prisma.mainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mains.
     */
    cursor?: Prisma.mainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mains.
     */
    distinct?: Prisma.MainScalarFieldEnum | Prisma.MainScalarFieldEnum[];
};
/**
 * main findMany
 */
export type mainFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter, which mains to fetch.
     */
    where?: Prisma.mainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mains to fetch.
     */
    orderBy?: Prisma.mainOrderByWithRelationInput | Prisma.mainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mains.
     */
    cursor?: Prisma.mainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mains.
     */
    skip?: number;
    distinct?: Prisma.MainScalarFieldEnum | Prisma.MainScalarFieldEnum[];
};
/**
 * main create
 */
export type mainCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * The data needed to create a main.
     */
    data: Prisma.XOR<Prisma.mainCreateInput, Prisma.mainUncheckedCreateInput>;
};
/**
 * main createMany
 */
export type mainCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many mains.
     */
    data: Prisma.mainCreateManyInput | Prisma.mainCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * main createManyAndReturn
 */
export type mainCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * The data used to create many mains.
     */
    data: Prisma.mainCreateManyInput | Prisma.mainCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * main update
 */
export type mainUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * The data needed to update a main.
     */
    data: Prisma.XOR<Prisma.mainUpdateInput, Prisma.mainUncheckedUpdateInput>;
    /**
     * Choose, which main to update.
     */
    where: Prisma.mainWhereUniqueInput;
};
/**
 * main updateMany
 */
export type mainUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update mains.
     */
    data: Prisma.XOR<Prisma.mainUpdateManyMutationInput, Prisma.mainUncheckedUpdateManyInput>;
    /**
     * Filter which mains to update
     */
    where?: Prisma.mainWhereInput;
    /**
     * Limit how many mains to update.
     */
    limit?: number;
};
/**
 * main updateManyAndReturn
 */
export type mainUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * The data used to update mains.
     */
    data: Prisma.XOR<Prisma.mainUpdateManyMutationInput, Prisma.mainUncheckedUpdateManyInput>;
    /**
     * Filter which mains to update
     */
    where?: Prisma.mainWhereInput;
    /**
     * Limit how many mains to update.
     */
    limit?: number;
};
/**
 * main upsert
 */
export type mainUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * The filter to search for the main to update in case it exists.
     */
    where: Prisma.mainWhereUniqueInput;
    /**
     * In case the main found by the `where` argument doesn't exist, create a new main with this data.
     */
    create: Prisma.XOR<Prisma.mainCreateInput, Prisma.mainUncheckedCreateInput>;
    /**
     * In case the main was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.mainUpdateInput, Prisma.mainUncheckedUpdateInput>;
};
/**
 * main delete
 */
export type mainDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
    /**
     * Filter which main to delete.
     */
    where: Prisma.mainWhereUniqueInput;
};
/**
 * main deleteMany
 */
export type mainDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mains to delete
     */
    where?: Prisma.mainWhereInput;
    /**
     * Limit how many mains to delete.
     */
    limit?: number;
};
/**
 * main without action
 */
export type mainDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the main
     */
    select?: Prisma.mainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the main
     */
    omit?: Prisma.mainOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=main.d.ts.map