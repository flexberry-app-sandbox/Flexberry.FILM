﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.FILM
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Фильмы.
    /// </summary>
    // *** Start programmer edit section *** (Фильмы CustomAttributes)

    // *** End programmer edit section *** (Фильмы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФильмыE", new string[] {
            "Код as \'Код\'"})]
    [View("ФильмыL", new string[] {
            "Код as \'Код\'"})]
    public class Фильмы : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        // *** Start programmer edit section *** (Фильмы CustomMembers)

        // *** End programmer edit section *** (Фильмы CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Фильмы.Код CustomAttributes)

        // *** End programmer edit section *** (Фильмы.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Фильмы.Код Get start)

                // *** End programmer edit section *** (Фильмы.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Фильмы.Код Get end)

                // *** End programmer edit section *** (Фильмы.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Фильмы.Код Set start)

                // *** End programmer edit section *** (Фильмы.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Фильмы.Код Set end)

                // *** End programmer edit section *** (Фильмы.Код Set end)
            }
        }
        
        // *** Start programmer edit section *** (Фильмы.VARCHAR CustomAttributes)

        // *** End programmer edit section *** (Фильмы.VARCHAR CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void VARCHAR()
        {
            // *** Start programmer edit section *** (Фильмы.VARCHAR method implementation)
            return;
            // *** End programmer edit section *** (Фильмы.VARCHAR method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФильмыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФильмыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФильмыE", typeof(IIS.FILM.Фильмы));
                }
            }
            
            /// <summary>
            /// "ФильмыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФильмыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФильмыL", typeof(IIS.FILM.Фильмы));
                }
            }
        }
    }
}
