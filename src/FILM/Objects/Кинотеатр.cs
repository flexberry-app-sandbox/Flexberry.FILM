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
    /// Кинотеатр.
    /// </summary>
    // *** Start programmer edit section *** (Кинотеатр CustomAttributes)

    // *** End programmer edit section *** (Кинотеатр CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КинотеатрE", new string[] {
            "Код as \'Код\'"})]
    [View("КинотеатрL", new string[] {
            "Код as \'Код\'"})]
    public class Кинотеатр : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        // *** Start programmer edit section *** (Кинотеатр CustomMembers)

        // *** End programmer edit section *** (Кинотеатр CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Кинотеатр.Код CustomAttributes)

        // *** End programmer edit section *** (Кинотеатр.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Кинотеатр.Код Get start)

                // *** End programmer edit section *** (Кинотеатр.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Кинотеатр.Код Get end)

                // *** End programmer edit section *** (Кинотеатр.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Кинотеатр.Код Set start)

                // *** End programmer edit section *** (Кинотеатр.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Кинотеатр.Код Set end)

                // *** End programmer edit section *** (Кинотеатр.Код Set end)
            }
        }
        
        // *** Start programmer edit section *** (Кинотеатр.VARCHAR CustomAttributes)

        // *** End programmer edit section *** (Кинотеатр.VARCHAR CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void VARCHAR()
        {
            // *** Start programmer edit section *** (Кинотеатр.VARCHAR method implementation)
            return;
            // *** End programmer edit section *** (Кинотеатр.VARCHAR method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КинотеатрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КинотеатрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КинотеатрE", typeof(IIS.FILM.Кинотеатр));
                }
            }
            
            /// <summary>
            /// "КинотеатрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КинотеатрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КинотеатрL", typeof(IIS.FILM.Кинотеатр));
                }
            }
        }
    }
}
